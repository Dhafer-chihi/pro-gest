import { Router } from "express";
import { deleteProduct, getProduct, getProducts, postProduct , putProduct } from "../controllers/product.controller";


const router = Router()

router.get('/' , getProducts)
router.get('/:product_id' , getProduct )
router.delete('/:product_id' , deleteProduct)
router.post('/:id_client' , postProduct)
router.put ('/:product_id/:id_client' , putProduct)

export default router