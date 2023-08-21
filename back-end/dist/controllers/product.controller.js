"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putProduct = exports.postProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const getProducts = (req, res) => {
    connection_1.default.query('select * from product', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    const { product_id } = req.params;
    connection_1.default.query('select * from product where product_id = ?', product_id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getProduct = getProduct;
// export const getProductClient = (req : Request , res : Response)=>{
//     const {id} = req.params
//     connection.query('select * from product where id_product = ?' , id , (err , data)=>{
//         if (err) throw err 
//         const id_client = data[0].id_client
//         res.json({'id client is ':id_client})
//     })
// }
const deleteProduct = (req, res) => {
    const { product_id } = req.params;
    connection_1.default.query('delete from product where product_id = ?', product_id, (err, data) => {
        res.json('Delete product');
    });
    console.log('delete');
};
exports.deleteProduct = deleteProduct;
const postProduct = (req, res) => {
    const { body } = req;
    connection_1.default.query('insert into product set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'add product',
            data
        });
    });
};
exports.postProduct = postProduct;
const putProduct = (req, res) => {
    const { body } = req;
    const { product_id } = req.params;
    connection_1.default.query('update product set ? where product_id = ?', [body, product_id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'update product',
            data
        });
    });
};
exports.putProduct = putProduct;
