exports.Get_RegistrationPage = function (req, res, next) {
    res.render('Registration', {
        title: 'Express'
    });
};

exports.Submit_Data = function (req, res, next) {
    console.log("Name of the Candidate : ", req.body.name);
    console.log("Email of the Candidate : ", req.body.email);
    console.log("Name of the Candidate : ", req.body.favouriteBook);
    console.log("Name of the Candidate : ", req.body.password);
    res.redirect('/');
};