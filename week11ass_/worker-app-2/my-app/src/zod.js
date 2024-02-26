"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogSchema = exports.userSchema = void 0;
var zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    username: zod_1.z.string(),
    password: zod_1.z.string()
});
exports.blogSchema = zod_1.z.object({
    title: zod_1.z.string(),
    body: zod_1.z.string()
});
// module.exports = { userSchema,blogSchema };
