
import { Request, Response } from 'express'
import prisma from '../prisma'


const inventario: string[] = [
    "Leche", "Huevos", "Pan"
]

export const getInventario = async (_req: Request, res: Response):Promise<void> => {
    try{
        const productos = await prisma.inventario.findMany()
        res.json(productos)
    }
    catch (error:any){
        res.status(500).json({message: "Error al obtener inventario", error: error.message})
    }
}

export const postInventario = async (req: Request, res: Response): Promise<void> => {
    try{
        const {nombre, descripcion, cantidad_actual, cantidad_minima, usuario_id} = req.body

        const nuevoProducto = await prisma.inventario.create({
            data: {
                nombre,
                descripcion,
                cantidad_actual,
                cantidad_minima,
                usuario_id
            }
        })

        console.log("Producto agregado " + nuevoProducto)
        res.status(201).json(nuevoProducto)
    }
    catch (error: any){
        console.error("Error al crear el producto " + error)
        res.status(500).json({message: "Error al crear producto ", error: error.message})
    }
}

export const putInventario = async (req: Request, res: Response) => {
    try{
        const {id, nombre, descripcion, cantidad_actual, cantidad_minima, usuario_id} = req.body

        const productoModificado = await prisma.inventario.update({
            where: {id: id},
            data:{
                nombre,
                descripcion,
                cantidad_actual,
                cantidad_minima,
                usuario_id
            }
        })
        res.status(200).json(productoModificado)
    }
    catch (error: any){
        console.error("Error al editar elemento" + error)
        res.status(500).json({message: "Error al modificar elemento", error: error.message})
    }
}

export const deleteInventario = (req: Request, res: Response) => {
    const id: number = req.body;
    inventario.splice(id, 1)
    res.json(inventario)
}