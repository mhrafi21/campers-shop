import mongoose, { Schema } from "mongoose";
import { TOrder } from "./order.interface";



const OrderSchema = new Schema<TOrder>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    totalAmount: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    address: { type: String, required: true },
    data: [String],
  });

export const Order = mongoose.model<TOrder>("Order", OrderSchema)