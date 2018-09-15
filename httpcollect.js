var http = require('http')
 var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    let str = data.toString();
    let strCount = str.length;
    console.log(strCount);
    console.log(str);
  }))

}).on('error', console.error)


// remember to check for errors, best practice
var http = require('http')
   var bl = require('bl')

   http.get(process.argv[2], function (response) {
     response.pipe(bl(function (err, data) {
       if (err) {
         return console.error(err)
       }
       data = data.toString()
       console.log(data.length)
       console.log(data)
     }))
   })
