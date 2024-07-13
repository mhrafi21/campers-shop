import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { cartServices } from "./cart.services";

const createCart = catchAsync(async(req,res) => {
    const result = await cartServices.createCartIntoDB(req.body);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Cart created successfully",
        data: result
    })
})


const getCart = catchAsync(async(req,res) => {
    const result = await cartServices.getCartFromDB();
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Cart retrieved successfully",
        data: result
    })
})

const updateCartItemQuantity = catchAsync(async(req,res) => {
    const result = await cartServices.updateCartItemQuantityIntoDB(req.body);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Cart item quantity updated successfully",
        data: result
    })
})

const deleteCart = catchAsync(async(req,res) => {
    const result = await cartServices.deleteCartItemFromDB(req.params.id);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Cart deleted successfully",
        data: result
    })
})

export const cartControllers = {
    createCart,
    getCart,
    deleteCart,
    updateCartItemQuantity
}