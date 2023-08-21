"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productByidClient = exports.putClient = exports.postClient = exports.deleteClient = exports.getClient = exports.getClients = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const getClients = (req, res) => {
    connection_1.default.query('select * from client', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getClients = getClients;
const getClient = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('select * from client where client_id = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getClient = getClient;
const deleteClient = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('delete from client where client_id = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json('delete client');
    });
};
exports.deleteClient = deleteClient;
const postClient = (req, res) => {
    const { body } = req;
    connection_1.default.query('insert into client set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'add client',
            data
        });
    });
};
exports.postClient = postClient;
const putClient = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('update client set ? where client_id = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'update client',
            data
        });
    });
};
exports.putClient = putClient;
const productByidClient = (req, res) => {
    const { id_client } = req.params;
    connection_1.default.query('select * from product where id_client = ?', id_client, (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.productByidClient = productByidClient;
