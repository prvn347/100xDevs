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
exports.updateTodo = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function updateTodo(todoId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.update({
            where: {
                id: todoId
            },
            data: {
                done: true
            },
            select: {
                title: true,
                description: true,
                done: true,
                id: true
            }
        });
        console.log("update is:", res);
        return res;
    });
}
exports.updateTodo = updateTodo;
updateTodo(1);
