/* core modules*/
var http = require("http");
var fs = require("fs");/* otro modulo*/

/* local modules */
var log = require("./modules/mylog");

/* parciales modules */
var {info,error} = require("./modules/mylog");

/* extern modules */
var {countries } = require("countries-list");

/* dominio url */
var url = require("url");

/* dominio url */
var querystring = require("querystring");

var server = http.createServer(function(request, response){

    var parsed = url.parse(request.url);
    console.log("parsed:", parsed);

    var pathname =parsed.pathname;

    var query = querystring.parse(parsed.query);
    console.log("query",query);
    
    if(pathname==='/'){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write('<html><body><p>HELLO PAGE</p></body></html>');
        response.end();
    }else if(pathname==='/exit'){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write('<html><body><p>BYE</p></body></html>');
        response.end();
    }else if(pathname==='/info'){
        var result = info(pathname)
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(result);
        response.end();
    }else if(pathname==='/country'){
        response.writeHead(200,{'Content-Type':'application/json'});
        response.write(JSON.stringify(countries[query.code]));
        //response.write(JSON.stringify(countries[query["code"]]));
        response.end();
    }else if(pathname==='/error'){
        var result = log.error(pathname)
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(result);
        response.end();
    }else {
        response.writeHead(404,{'Content-Type':'text/html'});
        response.write('<html><body><p>NOT FOUND</p></body></html>');
        response.end();
    }
});
server.listen(4000);
console.log("running on 4000");


console.log("hola");
function suma(num1,num2){
    return num1-num2;
}
var result = suma(2,3)
console.log ("la suma de dos numeros", suma(2,3) ,result);