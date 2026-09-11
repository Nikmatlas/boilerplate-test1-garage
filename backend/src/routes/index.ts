import { Router, type Router as ExpressRouter } from 'express'
import { usersRouter } from './users'

const router: ExpressRouter = Router()

router.use('/users', usersRouter)

export { router as apiRouter }
