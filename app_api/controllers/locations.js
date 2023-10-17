var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
 };
 var mongoose = require('mongoose');
 var Loc = mongoose.model('Location');
module.exports.locationsCreate = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.locationsListByDistance = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
 };
  
 module.exports.locationsReadOne = async function (req, res) {
 try {
 const location = await
 Loc.findById(req.params.locationid).exec();
 sendJsonResponse(res, 200, location);
 console.log(location)
 } catch (err) {
 // Handle the error
 sendJsonResponse(res, 500, { error: 'An error occurred' });
 }
 };
module.exports.locationsUpdateOne = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
 
};
module.exports.locationsDeleteOne = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
  
};