import express, { Application } from 'express'
import cors from 'cors'
import routesClient from '../routes/client.route'
import routesProduct from '../routes/product.route'
import connection from '../db/connection'

class Server{
    private app : Application
    private port : string

    constructor(){
        this.app = express()
        this.port =  process.env.PORT ||'3000'

        this.middleware()
        this.routee()   
        this.connectDB()     

    }


    listen(){
        this.app.listen(this.port , ()=>{
            console.log('My application starts on this port : ' ,this.port)
        })
    }

    routee(){
        this.app.use('/api/clients' , routesClient)
        this.app.use('/api/products' , routesProduct)
    }

    middleware(){
        // body parser
        this.app.use(express.json())
        // cors 
        this.app.use(cors())
    }

    connectDB(){
        connection.connect((err)=>{
            if (err) throw err
            console.log('Database connection')
        })
    }

   
}
export default Server