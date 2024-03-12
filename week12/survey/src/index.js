const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const {port} = require('./config')
const cors = require('cors')


const express = require('express');
const { surveyRouter } = require('./routes/surveyRouter');
const app = express()
app.use(cors())
// #4
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hello from pravin")
})
app.use('/api/v1/',surveyRouter)
app.listen(port,()=>{
    console.log(`you app is running on port ${port}`)
})