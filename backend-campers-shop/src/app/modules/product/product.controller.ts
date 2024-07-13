import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { TProduct } from './product.interface'
import { productService } from './product.services'

const createProduct = catchAsync(async (req, res) => {
  const result = await productService.createProductIntoDB(req.body as TProduct)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products created successfully!',
    data: result,
  })
})

const getAllProducts = catchAsync(async (req, res) => {
  const result = await productService.getProductsFromDB(req.query)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products retrieved successfully!',
    data: result,
  })
})

const getSingleProduct = catchAsync(async (req, res) => {
  const result = await productService.getSingleProductFromDB(req.params.id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single product retrieved successfully!',
    data: [result],
  })
})

const updateSingleProduct = catchAsync(async(req,res) => {
    const result = await productService.updateSingleProductFromDB(req.params.id as string, req.body as TProduct);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product updated successfully!',
        data: result,
    })
})

const deleteSingleProduct = catchAsync(async(req,res) => {
    const result = await productService.deleteSingleProductFromDB(req.params.id as string);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product deleted successfully!',
        data: result,
    })

})

export const productControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct
}
