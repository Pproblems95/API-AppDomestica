
import { Request, Response } from 'express'

const inventario: string[] = [
    "Leche", "Huevos", "Pan"
]

export const getInventario = (_req: Request, res: Response) => {
    console.log('Aqui se van a desplegar los productos del inventario para cada usuario')
    res.json(inventario)
}