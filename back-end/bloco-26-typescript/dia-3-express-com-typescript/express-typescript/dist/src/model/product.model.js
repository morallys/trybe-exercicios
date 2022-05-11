"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class ProductModel {
    constructor(connection) {
        this.connection = connection;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute('SELECT * FROM Products');
            const [rows] = result;
            return rows;
        });
    }
    create(product) {
        return __awaiter(this, void 0, void 0, function* () {
            //
            const { id, name, brand, price, manufacturing_date, expiration_date } = product;
            const result = yield this.connection.execute(`INSERT INTO Products VALUES (?, ?, ?, ?, ?, ?)`, [id, name, brand, price, manufacturing_date, expiration_date]);
            const [dataInserted] = result;
            const { insertId } = dataInserted;
            return Object.assign({ id: insertId }, product);
        });
    }
}
exports.default = ProductModel;
