import { Request , Response } from "express"
import connection from "../db/connection"


export const getProducts = (req : Request , res : Response)=>{
    connection.query('select * from product' , (err , data)=>{
        if (err) throw err
        res.json(data)
    })
}

export const getProduct = (req : Request , res : Response)=>{
    const product_id = req.params.product_id
    
    connection.query('select * from product where product_id = ?' , product_id , (err , data)=>{
        if (err) throw err 
        res.json(data)
        
    })
}

// export const getProductClient = (req : Request , res : Response)=>{
//     const {id} = req.params
    
//     connection.query('select * from product where id_product = ?' , id , (err , data)=>{
//         if (err) throw err 
//         const id_client = data[0].id_client
//         res.json({'id client is ':id_client})
        
//     })
// }





export const deleteProduct = (req : Request , res : Response)=>{
    const {product_id} = req.params

    connection.query('delete from product where product_id = ?' , product_id , (err , data)=>{
        res.json('Delete product')
    })
   console.log('delete')
}

export const postProduct = (req : Request , res : Response)=>{
    
    const {body} = req
    connection.query('insert into product set ?' , [body] , (err , data)=>{
        if (err) throw err 
        res.json({
            msg : 'add product',
            data
        })
    })
}

export const putProduct = (req : Request , res : Response)=>{
    const {body} = req 
    const {product_id} = req.params

    connection.query('update product set ? where product_id = ?' , [body , product_id] , (err , data)=>{
        if (err) throw err 
        res.json({
            msg : 'update product',
            data
        })
    })
}


