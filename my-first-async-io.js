/**
 
  Write a program that uses a single asynchronous filesystem operation to
  read a file and print the number of newlines it contains to the console
  (stdout), similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first
  command-line argument
 */
const fs  =   require('fs');

  const PATH=process.argv[2];


fs.readFile(PATH,'utf8',(err,res)=>{
    if(err){
        console.log("error while reading file");
        console.error(err);
    }else{
        console.log(res.split('\n').length-1);
    }
});
