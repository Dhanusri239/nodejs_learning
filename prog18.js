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
         res.write('<body>');
         res.write('<form enctype="multipart/form-data" action="/message" method="POST"><input type =text name=message><input type = "file" name="file"><input type="submit" value="send"></form>');
         res.write('</html>');
         return res.end();
         }
         if(url==='/message' && method=='POST'){
             const body=[];
             req.on('data',(chunk)=>{
                body.push(chunk);
                console.log(chunk);
             })
             req.on('end',()=>{
                 const parsedbody=Buffer.concat(body).toString();
                 const message=parsedbody.split('=');
                 fs.writeFileSync("Text.txt",message[1]);
             })
     
            fs.writeFileSync("Hii.txt",'hiiii hello');
            console.log('Hi this is synchronous..');
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