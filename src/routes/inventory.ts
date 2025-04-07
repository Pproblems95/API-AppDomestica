import express from 'express'
import { getInventario } from '../controllers/inventarioController'

const router = express.Router()

router.get('/', getInventario)

export default router