import express from 'express'
import { getInventario, postInventario, putInventario } from '../controllers/inventarioController'

const router = express.Router()

router.get('/', getInventario)
router.post('/', postInventario)
router.put('/', putInventario)

export default router