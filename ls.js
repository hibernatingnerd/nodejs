var fs = require('fs');
var filePath = process.argv[2];
var fileExten = process.argv[3];
var path = require('path');


  fs.readdir(filePath, (err, list) => {

  list.forEach
  ((e, index)=>{
    let ext = path.extname(e);
    if (ext.substring(1) === process.argv[3]) {
      console.log(e);
    }
  });
});

// better way
var fs = require('fs')
 var path = require('path')

 var folder = process.argv[2]
 var ext = '.' + process.argv[3]

 fs.readdir(folder, function (err, files) {
   if (err) return console.error(err)
   files.forEach(function (file) {
     if (path.extname(file) === ext) {
       console.log(file)
     }
   })
 })
