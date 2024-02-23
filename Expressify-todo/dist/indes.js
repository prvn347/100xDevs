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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_1 = require("./zod");
const client_1 = require("@prisma/client");
const getTodosAndUserDetails_1 = require("./getTodosAndUserDetails");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 3000;
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payloadData = req.body;
    const parserPayload = zod_1.userSchema.safeParse(payloadData);
    console.log(parserPayload);
    if (!parserPayload.success) {
        return res.status(400).json({ error: "Invalid input data", details: parserPayload.error });
    }
    const { username, password, name } = req.body;
    const user = yield prisma.user.create({
        data: {
            username,
            password,
            name
        },
        select: {
            id: true,
            username: true,
            password: true,
            name: true
        }
    });
    res.json({
        msg: user
    });
}));
app.post('/todo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payloadData = req.body;
    const parserPayload = zod_1.todoSchema.safeParse(payloadData);
    if (!parserPayload.success) {
        return res.status(400).json({ error: "Invalid input data", details: parserPayload.error });
    }
    const { userId, title, description } = req.body;
    const todo = yield prisma.todo.create({
        data: {
            userId,
            title,
            description
        },
        select: {
            title: true,
            description: true,
            done: true,
            id: true,
            userId: true
        }
    });
    res.json({
        msg: todo
    });
}));
app.get("/todos", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userId } = req.body;
        const todo = yield (0, getTodosAndUserDetails_1.getTodosAndUserDetails)(1);
        //   const todos = await prisma.todo.findMany({
        //     where: {
        //         userId,
        //     },
        //     select: {
        //         user: true,
        //         title: true,
        //         description: true
        //     }
        // });
        res.json({
            msg: todo
        });
    });
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
