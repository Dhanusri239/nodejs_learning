const http=require('http');
const bodyparser=require('body-parser');
const express=require('express');
const val=express();
const server=http.createServer(val);
val.use(bodyparser.urlencoded())
val.get('/addproduct',(req,res,next)=>{
    res.send('<h1>Add Product</h1><form action="/store-product" method="POST"><input type="text" name="title"><input type="submit" value="submit"></form>')
})
val.post('/store-product',(req,res,next)=>{
    console.log('Form Data:',req.body);
    res.send('Value Submitted successfully!!');
})
server.listen(8000);
