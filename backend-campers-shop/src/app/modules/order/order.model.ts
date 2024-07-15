import mongoose, { Schema } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>({
    productId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },

})

export const Order = mongoose.model<TOrder>("Order", orderSchema)