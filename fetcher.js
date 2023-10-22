const fs = require('fs');
const request = require('request');

//command line arguments: url, a local file path
//It should download the resource at the URL to the local path on your machine. 
//Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.
//You need to make an http request and wait for the response.
//After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.

//Links used to take and write info from/to
//let link = 'http://www.example.edu/';
//let pathToWrite = './index.html';


//Requesting info from passed in node link
request(process.argv[2], (error, response, body) => {

  if (error) {
    console.log("Error: ", error);
  }
//Getting the file size
  let fileSize = body.length;

//Writing received info to the passed in node path
  fs.writeFile(process.argv[3] , body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved a file with the size of ${fileSize} bytes to ${process.argv[3]}`);
  });

});