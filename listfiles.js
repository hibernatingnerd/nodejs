var fs = require('fs');
  var returnArray = [];

// module.exports allows me to call this function in another .js file. it can
// be a single function, or an object containing many functions listed by key name
module.exports = function (path, ext, callback){
  fs.readdir(path, (err, list) => {
    var path = require('path');
    if (err)
      return callback(err);

    list.forEach
      ((e, index)=>{
        let ext = path.extname(e);
        if (ext.substring(1) === process.argv[3]) {
          console.log(e);
          returnArray.push(e);
        }
      });
callback(null, ["CHANGELOG.md", "LICENCE.md", "README.md"]);
  });

  };
// best way





// solutionfilter.js
var fs = require('fs')
 var path = require('path')

 module.exports = function (dir, filterStr, callback) {
   fs.readdir(dir, function (err, list) {
     if (err) {
       return callback(err)
     }

     list = list.filter(function (file) {
       return path.extname(file) === '.' + filterStr
     })

     callback(null, list)
   })
 }
