import mongoose, {  Schema } from "mongoose";
import { TCart } from "./cart.interface";

const CartSchema = new Schema<TCart>({
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
})

const Cart = mongoose.model<TCart>("Cart", CartSchema)

export default Cart;