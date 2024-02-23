"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoSchema = exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    username: zod_1.z.string().email(),
    password: zod_1.z.string(),
    name: zod_1.z.string()
});
exports.todoSchema = zod_1.z.object({
    userId: zod_1.z.number(),
    title: zod_1.z.string(),
    description: zod_1.z.string()
});
module.exports = { userSchema: exports.userSchema, todoSchema: exports.todoSchema };
