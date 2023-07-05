import 'reflect-metadata'
import '../factories'
import express from 'express'
import { mainRouter } from './routes'

const app = express()
app.use('/api/v1', mainRouter)

export { app }
