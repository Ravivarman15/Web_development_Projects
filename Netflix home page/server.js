const http=require('http');
const fs=require('fs');
const backend=http.createServer((req,res)=>{
    if (req.url==='/'){
        fs.readFile('netflix@.html',(error,data)=>{
            if(error){
                res.statusCode=404;
                res.setHeader('Content-type','Text-html');
                res.end("File not found");
            }
            else{
                res.statusCode=200;
                res.setHeader('Content-type','Text-html');
                res.end(data);
            }
                
        })
    }

    })
backend.listen(3000,()=>{
    console.log('Success');
})