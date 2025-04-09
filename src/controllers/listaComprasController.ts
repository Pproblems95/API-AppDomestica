import { Request, Response } from 'express'

const inventario: string[] = [
    "Leche", "Huevos", "Pan"
]

export const getListaCompras = (_req: Request, res: Response) => {
    console.log('Aqui se van a desplegar los productos del inventario para cada usuario')
    res.json(inventario)
}

export const postListaCompras = (_req: Request, res: Response) => {
    console.log("El post va aqui")
    inventario.push("Nuevo elemento")
    res.json(inventario)
}

export const putListaCompras = (req: Request, res: Response) => {
    const {id, producto}  = req.body;
    inventario[id] = producto;
    console.log("Aqui va el metodo put para cambiar el id")
    res.json(inventario)
}

export const deleteListacompras = (req: Request, res: Response) => {
    const id: number = req.body;
    inventario.splice(id, 1)
    res.json(inventario)
}