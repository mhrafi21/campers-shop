import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import Product from '../product/product.model'
import { TOrder } from './order.interface'
import { Order } from './order.model'
import Cart from '../cart/cart.model'

const createOrderIntoDB = async (payload: TOrder) => {
  const { data } = payload;

  if (!data) {
    throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'Invalid payload')
  }

  for (const item of data) {
    const product = await Product.findById(item?.product._id)

    if (product) {
      if (product?.stockQuantity < item.quantity) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Not enough stock')
      } else {
        product.stockQuantity -= item.quantity
        const result = await Order.create(payload)
        await Cart.findByIdAndDelete(item._id)
        await product.save()
        return result
      }
    }
  }
}

export const orderServices = {
  createOrderIntoDB,
}