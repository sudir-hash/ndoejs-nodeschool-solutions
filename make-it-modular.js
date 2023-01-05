const filterFiles = require('./mymodule');

filterFiles(process.argv[2],process.argv[3],(err,list,ext)=>{
   if(err){
    console.log(err);
    }
    list.forEach(el=>console.log(el))
})


