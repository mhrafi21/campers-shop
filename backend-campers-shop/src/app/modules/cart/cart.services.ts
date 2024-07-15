import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import Product from '../product/product.model'
import { TCart, UpdateCartPayload } from './cart.interface'
import Cart from './cart.model'

const createCartIntoDB = async (payload: TCart) => {
  
  try {
    const product = await Product.findById(payload.product)
    if (!product) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Product not found')
    }

    const cartItem = await Cart.findOne({ product: payload.product }).populate("product")
    console.log(cartItem)
    if (!cartItem) {
      const result = await Cart.create(payload);
      return result
    }

    if (Number( product?.stockQuantity) > Number(payload.quantity)) {
      cartItem.quantity += payload.quantity
      await cartItem.save()
      return cartItem
    }else{
      throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, "Not enough Stock")
    }
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, `${error}`)
  }
}

const getCartFromDB = async () => {
  try {
    const result = await Cart.find().populate('product')
    if (!result) {
      throw new AppError(httpStatus.NOT_FOUND, 'No cart items found')
    }
    return result
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Product not found')
  }
}



const updateCartItemQuantityIntoDB = async (productId : string,payload: UpdateCartPayload) => {

  const { quantity } = payload
  try {
    const cartItem = await Cart.findById(productId); // Adjust for your data structure
    if (cartItem) {
      cartItem.quantity = quantity;
      await cartItem.save();
      
    } else {
      console.log("Error")
    }
  } catch (error) {
    console.log("Eror", error)
  }
}

const deleteCartItemFromDB = async (cartItemId: string) => {
  const result = await Cart.findByIdAndDelete(cartItemId)
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Cart item not found')
  }
  return result
}

export const cartServices = {
  createCartIntoDB,
  getCartFromDB,
  updateCartItemQuantityIntoDB,
  deleteCartItemFromDB,
}

