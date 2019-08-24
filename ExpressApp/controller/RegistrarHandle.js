var fs = require('fs');
var bodyParser = require('body-parser')

exports.Get_RegistrationPage = function (req, res, next) {
    res.render('Registration', {
        title: 'Express'
    });

};

exports.Submit_Data = function (req, res, next) {
    console.log("Name of the Candidate : ", req.body.name);
    console.log("Email of the Candidate : ", req.body.email);
    console.log("Fav book of the Candidate : ", req.body.favoriteBook);
    console.log("Password of the Candidate : ", req.body.password);
    fs.readFile('./file/file.txt', 'utf8', function (error, data) {
        console.log(data);
    });
    /*var object = {};
    req.forEach(function (value, key) {
        object[key] = value;
    });*/
    var dataMain = req.data.bodyParser.JSON();
    var jsonData = JSON.stringify(dataMain);
    fs.writeFile('./file/file.txt', jsonData , (err) => {
        if (err) {
            console.log('Error saving');
            throw err;
        } else {
            console.log('It\'s saved!');
        }
    });
    res.redirect('/register');
};