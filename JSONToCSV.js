const Json2csvParser = require('json2csv').Parser;
var http = require('http');
var fs = require('fs'); 
const fields = ['car', 'price', 'color'];
const myCars = [
  {
    "car": "Audi",
    "price": 40000,
    "color": "blue"
  }, {
    "car": "BMW",
    "price": 35000,
    "color": "black"
  }, {
    "car": "Porsche",
    "price": 60000,
    "color": "green"
  }
];



var server = http.createServer((req,res)=>{
    res.writeHead(200,{ 'content-type': 'application/json' });
    const json2csvParser = new Json2csvParser({ fields });
    const csv = json2csvParser.parse(myCars);

    console.log(csv);
    fs.writeFile('file.csv', csv, function(err) {
        if (err) throw err;
        console.log('file saved');
        res.end(csv);
      });
})

server.listen(8080);
