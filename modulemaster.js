var listData = require('./listfiles.js');
var filePath = process.argv[2];
var fileExten = process.argv[3];

listData.returnList(filePath, fileExten);
