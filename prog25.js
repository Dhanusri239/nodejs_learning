const http=require('http');
const Routes=require('./Routes25');
console.log(Routes.someText);
const server=http.createServer(Routes.handler);
server.listen(3000);