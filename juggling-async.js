const http  =   require('http');

const urls  =   process.argv.slice(2);

const results  =   [];

let count  =   0;


urls.forEach((url, index) => {
    http.get(url, (response) => {
        response.setEncoding('utf8');
        let data  =   '';
        response.on('data', (chunk) => {
        data  +=  chunk;
        });
        response.on('end', () => {
        results[index]  =  data;
        count++;
        if (count  ===  urls.length) {
            results.forEach((result) => {
            console.log(result);
            });
        }
        });
    });
    });