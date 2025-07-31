const express=require('express');
const http=require('http');
const val=express();
val.use((req,res,next)=>{
console.log('First middleware is running');
next();
})
val.use((req,res,next)=>{
console.log('second middleware is running');
next();
})
val.use((req,res,next)=>{
console.log('Third middleware is running');
next();
})
const server=http.createServer(val);
server.listen(8000);