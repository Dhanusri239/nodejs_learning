const http=require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url=='/'){
    res.write('<html>');
    res.write('<head>');
      res.write('<title>Submit Form Page</title>');
      res.write('</head>');
      res.write('<body><form action="/message" method="POST"><input type="text"name="message"><input type="submit"value="send"></form><body>');
    res.write('</html>');
    return res.end();
    }
res.setHeader('content-type','text/html');
res.write('<html>');
res.write('<head>');
 res.write('<title>Home Page</title>');
res.write('</head>');
 res.write('<body><h1>Welcome to my Home Page</h1></body>');
res.write('</html>');
res.end();
});
server.listen(3000);

