/**
 *  # LEARN YOU THE NODE.JS FOR MUCH WIN!

 ## HTTP FILE SERVER (Exercise 11 of 13)

  Create a file named http-file-server.js.

  Write an HTTP server that serves the same text file for each request it
  receives.

  * Your server should listen on the port provided by the first argument to
  your program.

  You will be provided with the location of the file to serve as the second
  command-line argument. You must use the fs.createReadStream() method to
  stream the file contents to the response.

 */
const http=require('http');
const path = require('path');
const fs=require('fs');

const server    =   http.createServer(async(req,res)=>{
    
    const readStream    =   fs.createReadStream(process.argv[3])
    res.writeHead(200, { 'content-type': 'text/plain' })
    readStream.pipe(res)
}
);

server.on('connect',(req,clsocke,head)=>{
    console.log('connected')
})
server.listen(process.argv[2],()=>{
    console.log("running on "+process.argv[2])
});
