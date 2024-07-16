import { Router } from 'express'

import { productsRoutes } from '../modules/product/product.route'
import { cartRoutes } from '../modules/cart/cart.route'
import { orderRoutes } from '../modules/order/order.route'

const router = Router()

const moduleRoutes = [
  { path: '/products', route: productsRoutes },
  { path: '/carts', route: cartRoutes },
  { path: '/orders', route: orderRoutes },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
