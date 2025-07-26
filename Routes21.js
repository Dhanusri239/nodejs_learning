
const fs=require('fs');
const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url=='/'){
        res.write('<html>');
        res.write('<head>');
        res.write('<title>Home Page</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<form action="/message" method ="POST"><input type="text" name="message"><input type="submit" value="send"></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method=='POST'){
        const body=[];
        req.on('data',(chunk)=>{
          console.log('Chunk data');
          body.push(chunk);
        })
        return req.on('end',()=>{
                        console.log("End event received");
                        const parsedbody=Buffer.concat(body).toString();
                        const txt=parsedbody.split('=');
                        fs.writeFile('Text1.txt',txt[1],(err)=>{
                        console.log('File write is completed');
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
module.exports={
    handler:requestHandler,
    someText:'Printing values'
}