// const { Prisma } = require("@prisma/client");
const express = require("express");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello from praivn");
});
app.post("/send", async (req, res) => {
  const resp = await prisma.user.create({
    data: {
      firstName: "pravin",
      lastName: "sahu",
      username: "userkioname",
      password: "passwrod",
    },
  });
  res.json({ data: resp });
});

app.listen(3000);
