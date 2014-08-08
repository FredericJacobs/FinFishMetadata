var walker = require('node-walker');
var shell = require('shelljs');
var gpgFilesFolderPath = process.cwd() + "/gpg"

var callback = function callback ( errorObject, fileName, fnNext ) {
  console.log("Currently processing: " + fileName);

  var cmd = 'gpg --decrypt ' + fileName + ' 2>>matches.temp';

  shell.exec(cmd, function(code, output){

      // The shell executes the command and writes output in tmp.
      if (fnNext) fnNext();
  });
}


walker ( gpgFilesFolderPath , callback );
