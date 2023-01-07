const fs=require('fs');


const readStream    =   fs.createReadStream(process.argv[2])
// const writeStream   =   fs.createWriteStream(res);
readStream.on('data',(data)=>console.log(data))
