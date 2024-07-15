import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import Product from '../product/product.model'
import { TCart } from './cart.interface'
import Cart from './cart.model'

const createCartIntoDB = async (payload: TCart) => {
  
  try {
    const product = await Product.findById(payload.product)

    if (!product) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Product not found')
    }

    const cartItem = await Cart.findOne({ product: payload.product })

    if (!cartItem) {
      const result = await Cart.create(payload);
      return result
    } else {
      if ( product.stockQuantity === 0 || product.stockQuantity < payload.quantity) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Not enough stock')
      }
      cartItem.quantity += payload.quantity
      await product.save()
      await cartItem.save()
      return cartItem
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

type UpdateCartPayload = {
  cartId: string
  action: 'increase' | 'decrease'
  quantity: number
}

const updateCartItemQuantityIntoDB = async (payload: UpdateCartPayload) => {
  try {
    let cartProduct = await Cart.findById(payload.cartId).populate('product')
    let product = await Product.findById(cartProduct?.product)

    if (!cartProduct || !product) {
      throw new AppError(httpStatus.NOT_FOUND, 'Cart item or product not found')
    }

    if (payload.action === 'increase' && payload.quantity === 1) {
      if (product.stockQuantity > 0 && product.stockQuantity > cartProduct.quantity) {
        cartProduct.quantity += payload.quantity
        await cartProduct.save();
      } else {
        throw new AppError(httpStatus.BAD_REQUEST, 'Not enough stock')
      }
    } else if (payload.action === 'decrease' && cartProduct?.quantity > payload?.quantity) {
      if (product.stockQuantity === 0 && product.stockQuantity < cartProduct.quantity) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Not enough stock')
      }
     if(cartProduct.quantity >= 1 && payload.quantity === 1){
  
      cartProduct.quantity -= payload.quantity
      await cartProduct.save();
     }
    } else {
      throw new AppError(httpStatus.BAD_REQUEST, 'Invalid action')
    }
    await cartProduct.save()
    await product.save()
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, `${error}`)
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

