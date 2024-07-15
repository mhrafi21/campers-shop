import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { orderServices } from "./order.services";
import { TOrder } from "./order.interface";

const createOrder = catchAsync(async(req,res) => {
    const result = await orderServices.createOrderIntoDB(req.body as TOrder);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Order created successfully!',
        data: result,
      })
})

export const orderControllers = {
    createOrder
}