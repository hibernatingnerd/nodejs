/*
Write an HTTP server that receives only POST requests and converts
incoming POST body characters to upper-case and returns it to the
client.
Your server should listen on port given as second index in progess.argv.
*/
var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  if (req.method != 'POST') {
    res.end();
    return console.log('Ignoring %s request. I am POST only', req.method)
  }

  req.pipe(map(toUpper)).pipe(res);
})

function toUpper (chunk) {
  return chunk.toString().toUpperCase();
}

server.listen(Number(process.argv[2]))

// or

var http = require('http')
 var map = require('through2-map')

 var server = http.createServer(function (req, res) {
   if (req.method !== 'POST') {
     return res.end('send me a POST\n')
   }

   req.pipe(map(function (chunk) {
     return chunk.toString().toUpperCase()
   })).pipe(res)
 })

 server.listen(Number(process.argv[2]))
