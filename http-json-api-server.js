/*
## HTTP JSON API SERVER (Exercise 13 of 13)  

  Write an HTTP server that serves JSON data when it receives a GET request  
  to the path '/api/parsetime'. Expect the request to contain a query string  
  with a key 'iso' and an ISO-format time as the value.  
   
  For example:  
   
  /api/parsetime?iso=2013-08-10T12:10:15.474Z  
   
  The JSON response should contain only 'hour', 'minute' and 'second'  
  properties. For example:  
   
     {  
       "hour": 14,  
       "minute": 23,  
       "second": 15  
     }  
   
  Add second endpoint for the path '/api/unixtime' which accepts the same  
  query string but returns UNIX epoch time in milliseconds (the number of  
  milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.  
  For example:  
   
     { "unixtime": 1376136615474 }  

  Your server should listen on the port provided by the first argument to
  your program.

 ─────────────────────────────────────────────────────────────────────────────

 ## HINTS

  The request object from an HTTP server has a url property that you will
  need to use to "route" your requests for the two endpoints.

  You can parse the URL and query string using the Node core 'url' module.
  new URL(request.url) will parse content of request.url and provide you
  with an object with helpful properties.

  For example, on the command prompt, type:

     $ node -pe "new URL('/test?q=1', 'http://example.com')"

  Documentation on the url module can be found by pointing your browser
  here:
  file://C:\Users\sudir\AppData\Roaming\npm\node_modules\learnyounode\docs-n
  odejs\url.html

  Your response should be in a JSON string format. Look at JSON.stringify()
  for more information.

  You should also be a good web citizen and set the Content-Type properly:

     res.writeHead(200, { 'Content-Type': 'application/json' })

  The JavaScript Date object can print dates in ISO format, e.g. new
  Date().toISOString(). It can also parse this format if you pass the string
  into the Date constructor. Date.getTime() will also come in handy.
   */
const URL= require('url');
const http=require('http')


const   server  =   http.createServer(
    (req,res)=>{
        // let reqData= URL(req.url.split('/api')[1],req.url.split('/api')[0]);
        let reqData= URL.parse(req.url,true);
        let route=reqData.pathname.split('/api')[1].replace('/','');
        console.log(reqData);
        let query=reqData.search.split('=')[1];
        console.log('query',query)
        let date=undefined;
        try {
             date=new Date(query);
            
        } catch (error) {
             date=new Date();
        }
        console.log('date',date);
        let response={};
        if(route==='parsetime'&&date!==undefined){
            response= {  
                "hour": date.getHours(),  
                "minute": date.getMinutes(),  
                "second": date.getSeconds()  
            }
        }
        if(route==='unixtime'&&date!==undefined){
            response={ "unixtime": Math.floor(date.getTime()) }  
        }
        res.writeHead(200, { 'Content-Type': 'application/json' })
        response    =   JSON.stringify(response).toString();
        res.end(response)  
       
    }
);

server.listen(process.argv[2]);
