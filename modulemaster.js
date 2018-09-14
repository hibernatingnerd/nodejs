var listData = require('./listfiles.js');
// process argv is the buffer that gets handed to our node. it is an Array, the first
// two entries are information, and everything past process.argv[2] is data we want
var filePath = process.argv[2];
var fileExten = process.argv[3];

listData(filePath, fileExten);

// best practice
// solution.js
var filterFn = require('./solution_filter.js')
  var dir = process.argv[2]
  var filterStr = process.argv[3]

  filterFn(dir, filterStr, function (err, list) {
    if (err) {
      return console.error('There was an error:', err)
    }

    list.forEach(function (file) {
      console.log(file)
    })
  })
