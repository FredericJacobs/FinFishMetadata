// In this file, we process the matches.temp file and extract the keyIDs
var tempPath = process.cwd() + "/matches.temp"
var shell = require('shelljs');

var fs = require('fs')


getKey = function(keyIDs){
  if(keyIDs.length > 0){
      var cmd = 'gpg --recv-keys ' + keyIDs.pop() + ' 2>>recvKeys.temp';
      shell.exec(cmd, function(code, output){
          getKey(keyIDs);
      });
  } else{
    console.log("Done");
  }
}

fs.readFile(tempPath, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  //var result = data.replace(/string to be replaced/g, 'replacement');

  keyIDs = data.match(/[0-9A-Z]{8}/gm);

  filteredArray = keyIDs.filter(function(elem, pos) {
    return keyIDs.indexOf(elem) == pos;
  })

  getKey(filteredArray);

});
