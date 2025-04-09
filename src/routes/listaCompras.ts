import express from 'express'
import { getListaCompras, postListaCompras, putListaCompras, deleteListacompras } from '../controllers/listaComprasController'

const router = express.Router()

router.get('/', getListaCompras)
router.post('/', postListaCompras)
router.put('/', putListaCompras)
router.delete('/', deleteListacompras)

export default router