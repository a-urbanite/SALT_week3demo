const fizzbuzz = require("./fizzbuzz").fizzBuzz;
const romanNumbers = require("./roman-numbers"); 
const fs = require('fs');

const http = require('http');

//create a server object:
http.createServer(function (req, res) {

    fs.readFile('./index.html', function (err, html) {
        if (err) {
            throw err; 
        }       
            res.writeHeader(200, {"Content-Type": "text/html"});  
            res.write(html);  
            res.end(); 
    })


  }).listen(8080); //the server object listens on port 8080