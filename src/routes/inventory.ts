import express from 'express'
import { getInventario, postInventario, putInventario, deleteInventario } from '../controllers/inventarioController'

const router = express.Router()

router.get('/', getInventario)
router.post('/', postInventario)
router.put('/', putInventario)
router.delete('/', deleteInventario)

export default router