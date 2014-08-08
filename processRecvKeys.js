var fs = require('fs')

var tempPath = process.cwd() + "/recvKeys.temp"

fs.readFile(tempPath, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  //var result = data.replace(/string to be replaced/g, 'replacement');

  keyIDs = data.match(/"(?:[^\\"]+|\\.)*"/g);

  var uniqueArray = keyIDs.filter(function(elem, pos) {
    return keyIDs.indexOf(elem) == pos;
  });

  console.log(uniqueArray);

});
