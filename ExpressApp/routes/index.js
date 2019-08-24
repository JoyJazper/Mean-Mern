var express = require('express');
var router = express.Router();

/*const multer = require("multer");
const fs = require("fs");
const path = require("path");
const upload = multer({
    dest: "uploads/" // "uploads"
});*/

var index = require('../controller/index');
var register = require('../controller/RegistrarHandle');

/* GET home page. */
router.get('/', index.index);
router.get('/register', register.Get_RegistrationPage);
router.post('/register', register.Submit_Data);

router.post('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../myWebpage/'));
  // res.send('Get Request!')
})
/*
function readFile( url ){
  fs.readFile(url, 'utf8', function( err, data ){
      if ( err ) {
          console.log( 'error', err );
      } else {
          console.log('file read');
          return data;
      }
  });
}

function saveFile( url, body ){
  fs.writeFile(url, body, (err) => {
      if (err) {
          console.log('Error saving');
          throw err;
      } else {
          console.log('It\'s saved!');
      }
  });
}
*/
/*router.post("/register", (req, res, next) => {
  console.log(req.file.path);
  //const absolutePath = path.join(__dirname, req.file.path);
  //const jsonString = fs.readFileSync(absolutePath, "utf-8");
  //const jsonObject = JSON.parse(jsonString);
  //console.log(jsonObject);
  res.redirect("/");
});*/

module.exports = router;
