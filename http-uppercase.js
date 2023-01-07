const http=require('http');



const server = http.createServer();

// Listen to the request event
server.on('request', async(req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  req.on('data',(chunk)=>{
    // console.log(chunk.toString().toUpperCase())
    res.write(chunk.toString().toUpperCase());
  }).on('end',()=>res.end());
});


server.listen(process.argv[2]);