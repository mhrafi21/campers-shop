import mongoose, { Schema } from 'mongoose'
import { TProduct } from './product.interface'

const productSchema = new Schema<TProduct>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stockQuantity: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    ratings: { type: Number, default: 0 },
    images: { type: [String], default: [] },
  },
  { timestamps: true },
)

const Product = mongoose.model<TProduct>('Product', productSchema)

export default Product
