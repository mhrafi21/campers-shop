import { Router } from 'express'

import { productsRoutes } from '../modules/product/product.route'
import { cartRoutes } from '../modules/cart/cart.route'

const router = Router()

const moduleRoutes = [
  { path: '/products', route: productsRoutes },
  { path: '/carts', route: cartRoutes },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
