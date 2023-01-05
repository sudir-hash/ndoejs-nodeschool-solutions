/*
 Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Collect all data from the server (not
  just the first "data" event) and then write two lines to the console
  (stdout).

  The first line you write should just be an integer representing the number
  of characters received from the server. The second line should contain the
  complete String of characters sent by the server
   */

  url=process.argv[2]

const bl=require('bl')
const http=require('http')


http.get(url,(res)=>{
    let list=[]
    res.pipe(bl((err,data)=>{
       list.push( data.toString())
    }))
    
    res.on('end',(data)=>{
        list.forEach(el=>{
            console.log(el.length)
            console.log(el);
        })

    })
   
})


