var fs = require('fs');


module.exports = {returnList: function (path, ext, callback){
  fs.readdir(path, (err, list) => {
    var path = require('path');
    list.forEach
      ((e, index)=>{
        let ext = path.extname(e);
        if (ext.substring(1) === process.argv[3]) {
          console.log(e);
        }
      });
  });

  }
};
// module.exports = function returnList(filePath, ext ){
//   fs.readdir(filePath, (err, list) => {
//   if (err) {
//     console.log(err);
//   } else {
//
// }
