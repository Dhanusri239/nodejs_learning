const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url=='/'){
        res.write('<html>');
        res.write('<head>');
        res.write('<title>Home page</title>');
        res.write('</head>');
        res.write('<body><form action= "/message" method="POST"><input type="text" name="message"><input type="submit" value="send"></form>');
         res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method =='POST') {
        fs.writeFileSync('hello.txt','Hello');
        res.setHeader('Location','/');
        res.statusCode=302;
        return res.end();
    } 
    res.setHeader('content-type','text/html')
     res.write('<html>');
        res.write('<head>');
        res.write('<title>Home page</title>');
        res.write('</head>');
        res.write('<body>');
         res.write('<h1>Welcome to my redirecting requests</h1>');
         res.write('</body>');
        res.write('</html>');
        res.end();
});
server.listen(3000);