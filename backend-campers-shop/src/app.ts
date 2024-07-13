import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import notFound from './app/middlewares/notFound'
import allNotFound from './app/middlewares/allNotFound'
import router from './app/routes'

const app: Application = express()

// parser
app.use(express.json())
app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Type', 'Authorization'],
  }),
)

// application routes

app.use('/api/v1', router)

app.get('/', async (req: Request, res: Response) => {
  res.send('The server is running')
})

app.use(notFound)
app.use(globalErrorHandler)

app.all('*', allNotFound)

export default app