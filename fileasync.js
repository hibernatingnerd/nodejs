var fs = require('fs');
var filePath = process.argv[2];

function lineCount() {
  fs.readFile(filePath, function doneReading(err, fileContents) {
  to_string = fileContents.toString();
  split_lines = to_string.split("\n");
  console.log(split_lines.length-1);
  })
}

lineCount();

// best way
var fs = require('fs')
 var file = process.argv[2]

 fs.readFile(file, function (err, contents) {
   if (err) {
     return console.log(err)
   }
   // fs.readFile(file, 'utf8', callback) can also be used
   var lines = contents.toString().split('\n').length - 1
   console.log(lines)
 })
