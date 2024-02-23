"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoSchema = exports.userSchema = void 0;
var zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string(zod_1.z.number().min(2)),
    name: zod_1.z.string()
});
exports.todoSchema = zod_1.z.object({
    userId: zod_1.z.string(),
    title: zod_1.z.string(),
    description: zod_1.z.string()
});
module.exports = { userSchema: exports.userSchema, todoSchema: exports.todoSchema };
