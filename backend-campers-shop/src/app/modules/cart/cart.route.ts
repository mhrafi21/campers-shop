import express from "express"
import { cartControllers } from "./cart.controller";
const router = express.Router();


router.post("/create-cart", cartControllers.createCart);
router.get("/", cartControllers.getCart)
router.delete("/:id", cartControllers.deleteCart)
router.patch("/:id", cartControllers.updateCartItemQuantity)

export const cartRoutes = router;