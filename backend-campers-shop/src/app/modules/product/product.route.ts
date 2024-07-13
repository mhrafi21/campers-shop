import express from 'express'
import { productControllers } from './product.controller'

const router = express.Router()

router.post('/create-product', productControllers.createProduct)

router.get('/', productControllers.getAllProducts)
router.get('/:id', productControllers.getSingleProduct)
router.put('/:id', productControllers.updateSingleProduct)
router.delete('/:id', productControllers.deleteSingleProduct)

export const productsRoutes = router
