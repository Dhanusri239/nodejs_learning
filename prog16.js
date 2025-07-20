const fs= require('fs');
const http=require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url=='/'){
        res.write('<html>');
        res.write('<head>');
        res.write('<title>Home page</title>');
        res.write('<body>');
        res.write('<form enctype="multipart/form-data" action="/message" method="POST"><input type="text" name="message"><input type="file" name="file"><input type="submit" value="send">');
        res.write('</body>');
        res.write('</head>');
        res.write('</head>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method=='POST'){
        req.on('data',(chunk)=>{
            console.log('Chunk Data:');
            console.log(chunk);

        })
        fs.writeFileSync('hi.txt','hiii');
        res.setHeader('Location','/');
        res.statusCode=302;
        return res.end();
    }
    res.setHeader('content-type','text/html');
    res.write('<html>');
        res.write('<head>');
        res.write('<title>Home page</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Welcome to our page</h1>');
        res.write('</body>');
        res.write('</html>');
        res.end();

});
server.listen(3000);