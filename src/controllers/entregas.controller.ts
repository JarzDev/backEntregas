import { Request,Response } from "express"
import { handleError } from "../utils/errors.handle"
import entregasModel from "../models/entregas"

const getItems= async(req:Request, res:Response)=>{
    try { const resGet= await entregasModel.findAll();
        res.send(resGet)
    }
     catch (e: any) {
        handleError(e,'Error Get Items')
    }
}
const getItem=async(req:Request, res:Response)=>{
    const {id} = req.params;    
    const product =  await entregasModel.findByPk(id);

   if(product){
    res.json(product)
    }else{
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
    }
}

const getItemsByuserId=async(req:Request, res:Response)=>{
    const {id} = req.params;    
    const product =  await entregasModel.findAll({where:{user_id:id}});

   if(product){
    res.json(product)
    }else{
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
    }
}

const getItemsByMesAndUser_id=async(req:Request, res:Response)=>{
    const {id, mes} = req.params;    
    const product =  await entregasModel.findAll({where:{user_id:id, mes:mes}});

   if(product){
    res.json(product)
    }else{
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
    }
}

const getItemsByMes = async(req:Request, res:Response)=>{
    const {mes} = req.params;    
    const product =  await entregasModel.findAll({where:{mes:mes}});

   if(product){
    res.json(product)
    }else{
        res.status(404).json({
            msg: `No existe un producto con el id ${mes}`
        })
    }
}

const postItem= async( req :Request, res:Response)=>{
    const {body} = req;   
    try {
        const product = await entregasModel.create(body);
        res.json({msg: 'producto creado', product})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error Creando Producto'
        })
    }
    
}
const putItem= async(req:Request, res:Response)=>{
    const {body} = req;   
        const {id} = req.params;
            const product =  await entregasModel.findByPk(id);
       if (product) {
       try {
        await product.update(body);
         res.json({msg: 'Producto Actualizado', product})
         } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
          }
        }
       else{
            res.status(404).json({
                msg: `No existe un producto con el id ${id}`
            })
        }
}
const deleteItem= async(req:Request, res:Response)=>{
    const {id} = req.params; 
    const product =  await entregasModel.findByPk(id);

    if(product){
     await product.destroy()
        res.json({msg: `Producto Eliminado`})
     }else{
         res.status(404).json({
             msg: `No existe un producto con el id ${id}`
         })
     }
}

export  { getItems, getItem, postItem, putItem, deleteItem, getItemsByuserId, getItemsByMes, getItemsByMesAndUser_id }

