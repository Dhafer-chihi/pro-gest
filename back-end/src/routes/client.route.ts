import { Router } from "express";
import { deleteClient, getClient, getClients, postClient, productByidClient, putClient } from "../controllers/client.controller";

const router = Router()

router.get('/' , getClients)
router.get('/:id' , getClient)
router.delete('/:id' , deleteClient)
router.post('/' , postClient)
router.put('/:id' , putClient)
router.get('/client/:id_client' , productByidClient)


export default router