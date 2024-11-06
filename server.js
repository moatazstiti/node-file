const http= require ('http');


http.createServer((request,response)=>{
     response.end("HELLO NODE !!!")
}).listen(3000);
