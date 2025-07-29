const fs=require('fs');
const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url=='/'){
        res.write('<html>');
          res.write('<head>');
          res.write('<title>Home Page</title>');
          res.write('<head>');
          res.write('<body>');
          res.write('<form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="send"></form>');
          res.write('</body>');
          res.write('<html>');
          return res.end();
    }
    if(url==='/message' && method=='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log('Chunk values');
            console.log(chunk);
            body.push(chunk);
        })
       return req.on('end',()=>{
            console.log('End value is received');
            const parsedbody=Buffer.concat(body).toString();
            txt=parsedbody.split('=');
            fs.writeFile('Text4.txt',txt[1],(err)=>{
               res.setHeader('Location','/');
               res.statusCode=302;
              return res.end();
            });

        })
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
}
exports.handler=requestHandler;
exports.someText='Printing some values';