import {  Types } from "mongoose"

export type UpdateCartPayload = {
    quantity: number
  }

export type TCart = {
    product: Types.ObjectId,
    quantity: number
}

