import express from 'express'
const app = express()

app.get('/',(req,res)=>{
    res.end('hello world')
})

app.listen(1000,()=>{
    console.log('connected to server')
})