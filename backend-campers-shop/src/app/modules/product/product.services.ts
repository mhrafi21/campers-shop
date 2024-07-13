import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { TProduct } from './product.interface'
import Product from './product.model'

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload)
  return result
}

const getProductsFromDB = async (query: Record<string, unknown>) => {
  console.log(query);
  try {
    const { search, category, minPrice, maxPrice, sort } = query;

    let filterQuery = {};

    // Searching product using product name or description
    if (search) {
      filterQuery = {
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
        ],
      };
    }

    // Filter by price - min to max
    if (minPrice || maxPrice) {
      if (minPrice && !maxPrice) {
        filterQuery = { ...filterQuery, price: { $gte: Number(minPrice) } };
      }
      if (!minPrice && maxPrice) {
        filterQuery = { ...filterQuery, price: { $lte: Number(maxPrice) } };
      }
      if (minPrice && maxPrice) {
        filterQuery = {
          ...filterQuery,
          price: { $gte: Number(minPrice), $lte: Number(maxPrice) },
        };
      }
    }

    // Filter by category
    if (category) {
      filterQuery = { ...filterQuery, category };
    }

    // Sorting the products by price
    let sortOption = {};

    if (sort) {
      sortOption = sort === 'asc' ? { price: 1 } : { price: -1 };
    }

    const products = await Product.find(filterQuery).sort(sortOption);
    return products
  } catch (error) {
    console.error('Error fetching products:', error);
    
  }
}

const getSingleProductFromDB = async (productId: string) => {
  console.log(productId);
  const result = await Product.findById(productId);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'No data found')
  }
  return result
}

const updateSingleProductFromDB = async (
  productId: string,
  payload: TProduct,
) => {
  const {
    name,
    price,
    stockQuantity,
    description,
    category,
    ratings,
    images,
    deleteImages,
  } = payload

  // Find the product by ID
  const product = await Product.findById(productId)

  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, 'Data not found!')
  }

  // Update product fields
  if (name !== undefined) product.name = name
  if (price !== undefined) product.price = price
  if (stockQuantity !== undefined) product.stockQuantity = stockQuantity
  if (description !== undefined) product.description = description
  if (category !== undefined) product.category = category
  if (ratings !== undefined) product.ratings = ratings

  // Merge existing images with new images
  if (images) {
    product.images = [...product.images, ...images]
  }

  if (deleteImages && Array.isArray(deleteImages)) {
    product.images = product.images.filter(
      image => !deleteImages.includes(image),
    )
  }

  // Save the updated product
  const result = await product.save()
  return result
}

const deleteSingleProductFromDB = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId)
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Data not found!')
  }
  return result
}

export const productService = {
  createProductIntoDB,
  getProductsFromDB,
  getSingleProductFromDB,
  updateSingleProductFromDB,
  deleteSingleProductFromDB,
}
