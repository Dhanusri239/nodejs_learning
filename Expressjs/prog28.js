const express=require('express');
const http=require('http');
const val=express();
const server=http.createServer(val);
server.listen(8000);