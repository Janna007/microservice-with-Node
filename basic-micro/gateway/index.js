const express=require('express')
const cors=require('cors')
const proxy=require('express-http-proxy')

const app=express()

app.use(cors())
app.use(express.json())

app.use('/customer',proxy('http://localhost:3000')) //customer
app.use('/shopping',proxy('http://localhost:3002'))  //shopping
app.use('/',proxy('http://localhost:3001'))  //product
 //shopping

app.listen(3003,()=>{
    console.log('gateway is listening on 3003')
})

