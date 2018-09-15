var http = require('http');

// process.argv[2] will contain the dns path for our
// get request. it is supplied as the first arg in
// http.get(arg, callback)

http.get(process.argv[2], callback)


// http.get callback, unique response object(which is a
// Node Stream object). Emit event, 3 of note:  data, error,
// end
// listen for event:
// response.on("data", function (data){...}).
function callback (response) {
  response.setEncoding("utf8");
  response.on("data", function (data){
    console.log(data);
  })
}


// module answer
var http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)
