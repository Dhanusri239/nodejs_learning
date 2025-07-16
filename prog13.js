const http=require('http');
const server=http.createServer((req,res)=>{
    res.setHeader('content-type','text/html');
    res.write('<html>');
     res.write('<head>');
      res.write('<title>Home page</title>');
       res.write('<h1>Welcome to my Home Page<h1>');
      res.write('</head>');
     res.write('</html>');
     res.end();
});
server.listen(3000);