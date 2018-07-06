var csv = require('csv');
var http = require('http');
var fs = require('fs'); 
var parse = require('csv-parse');

var csvData=[];
fs.createReadStream(__dirname+'/data-example-1.csv')
    .pipe(parse({delimiter: ','}))
    .on('data', function(csvrow) {
        console.log(csvrow);
        //do something with csvrow
        csvData.push(csvrow);        
    })
    .on('end',function() {
      //do something wiht csvData
      console.log(csvData);
    });

var server = http.createServer((req,res)=>{
    res.writeHead(200,{ 'content-type': 'application/json' });
    res.end('Hi');
})

server.listen(8080);