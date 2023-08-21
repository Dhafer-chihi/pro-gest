"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_route_1 = __importDefault(require("../routes/client.route"));
const product_route_1 = __importDefault(require("../routes/product.route"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.middleware();
        this.routee();
        this.connectDB();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('My application starts on this port : ', this.port);
        });
    }
    routee() {
        this.app.use('/api/clients', client_route_1.default);
        this.app.use('/api/products', product_route_1.default);
    }
    middleware() {
        // body parser
        this.app.use(express_1.default.json());
        // cors 
        this.app.use((0, cors_1.default)());
    }
    connectDB() {
        connection_1.default.connect((err) => {
            if (err)
                throw err;
            console.log('Database connection');
        });
    }
}
exports.default = Server;
