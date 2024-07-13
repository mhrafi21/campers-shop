import {  Types } from "mongoose"

export type TCart = {
    product: Types.ObjectId,
    quantity: number
}

