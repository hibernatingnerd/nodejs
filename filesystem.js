var fs = require('fs');
filePath = process.argv[2];
fileBuffer =  fs.readFileSync(filePath);
to_string = fileBuffer.toString();
split_lines = to_string.split("\n");
console.log(split_lines.length-1);


// correct answer
var fs = require('fs')

 var contents = fs.readFileSync(process.argv[2], 'utf8')
 var lines = contents.toString().split('\n').length - 1
 console.log(lines)

 // note you can avoid the .toString() by passing 'utf8' as the
 // second argument to readFileSync, then you'll get a String!
 //
 // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
