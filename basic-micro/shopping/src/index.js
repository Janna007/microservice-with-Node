const express=require('express')
const dotenv=require('dotenv')
const dbConnection = require('./database/connection')

const app=express()

dotenv.config({
    path:'./.env'
})
dbConnection()

app.use(express.json())

app.get('/',(req,res,next)=>{
    return res.send("shopping server working")
})

app.listen(process.env.PORT,()=>{
    console.log(`shopping is listening on ${process.env.PORT}`)
})