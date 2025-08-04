const express=require('express');
const http=require('http');
const val=express();
val.use('/First',(req,res,next)=>{
    console.log('First Middleware');
    res.send('<h1>Hello Guys Welocome to our First Page..</h1>');
})
val.use('/Second',(req,res,next)=>{
    console.log('Second Middleware');
    res.send('<h1>Hello Guys Welocome to our Second Page..</h1>');
})
val.use('/',(req,res,next)=>{
    console.log('overall Middleware');
    res.send('<h1>Hello Guys Welocome to our WebPage..</h1>');
})
const server=http.createServer(val);
server.listen(8000);