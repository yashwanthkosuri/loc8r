/* GET 'about us' page */
module.exports.about = function(req, res) {
    res.render('generic-text', {
        title: 'About Kids channel',
        content: 'Looking for nursery rhymes and songs for children? Kids Channel helps you find graphic videos and nursery rhymes.'
    });
  };

  module.exports.signin = function(req, res){
    res.render('sign-in',{title:'Sign In'});
};

module.exports.register = function(req, res){
    res.render('register',{title:'Register'});
};
