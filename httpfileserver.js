// require filesystem
var fs = require('fs')

// A typical Node HTTP server looks like this:
  // require http
  var http = require('http')
// same as net.createServer but for http requests (get, post, patch, put)
   var server = http.createServer(function (req, res) {
     // request handling logic...
     // get the data from progress.argv
     var data = fs.createReadStream(process.argv[3])
    // retrieve object value under key "path"
     var path = data.path
     // Get buffer from path location
     var fileBuffer = fs.readFileSync(path)
     // convert to string (or declare utf8 as an option in readFileSync)
     var fileStr =  fileBuffer.toString()

     // write the head response
     res.writeHead(200, {'Content-Type': 'text/plain'});
     // now pass whatever you wish to send.
    res.end(fileStr);



   }).listen(Number(process.argv[2]))

// clean answer
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
