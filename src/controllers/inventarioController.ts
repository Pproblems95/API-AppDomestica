
import { Request, Response } from 'express'

const inventario: string[] = [
    "Leche", "Huevos", "Pan"
]

export const getInventario = (_req: Request, res: Response) => {
    console.log('Aqui se van a desplegar los productos del inventario para cada usuario')
    res.json(inventario)
}

export const postInventario = (_req: Request, res: Response) => {
    console.log("El post va aqui")
    inventario.push("Nuevo elemento")
    res.json(inventario)
}

export const putInventario = (req: Request, res: Response) => {
    const {id, producto}  = req.body;
    inventario[id] = producto;
    console.log("Aqui va el metodo put para cambiar el id")
    res.json(inventario)
    

}