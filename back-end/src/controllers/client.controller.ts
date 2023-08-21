import { Request , Response } from "express"
import connection from "../db/connection"


export const getClients = (req : Request , res : Response)=>{
    connection.query('select * from client' , (err , data)=>{
        if (err) throw err 
        res.json(data)
    })
    
}

export const getClient = (req : Request , res : Response)=>{
    
    const {id} = req.params
    connection.query('select * from client where client_id = ?' , id , (err , data)=>{
        if (err) throw err
        res.json(data[0])
    })
}




export const deleteClient = (req : Request , res : Response)=>{
    const {id} = req.params

    connection.query ('delete from client where client_id = ?' , id , (err , data)=>{
        if (err) throw err 
        res.json('delete client')
    })
}

export const postClient = (req : Request , res : Response)=>{
   
    const {body} = req
    connection.query('insert into client set ?' , [body] , (err , data)=>{
        if (err) throw err
        res.json({
            msg : 'add client',
            data
        })
        
    })
}

export const putClient = (req : Request , res : Response)=>{
    const {body} = req
    const {id} = req.params

    connection.query('update client set ? where client_id = ?' , [body , id] , (err , data)=>{
        if (err) throw err 
        res.json({
            msg : 'update client',
            data
        })
    })
}

export const productByidClient = (req : Request , res : Response)=>{
    const {id_client} = req.params

    connection.query('select * from product where id_client = ?' , id_client , (err , data)=>{
        if (err) throw err
        res.json(data)
    })
}