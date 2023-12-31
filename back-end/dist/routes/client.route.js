"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_controller_1 = require("../controllers/client.controller");
const router = (0, express_1.Router)();
router.get('/', client_controller_1.getClients);
router.get('/:id', client_controller_1.getClient);
router.delete('/:id', client_controller_1.deleteClient);
router.post('/', client_controller_1.postClient);
router.put('/:id', client_controller_1.putClient);
router.get('/client/:id_client', client_controller_1.productByidClient);
exports.default = router;
