var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
 };
module.exports.locationsCreate = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.locationsListByDistance = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
 };
module.exports.locationsReadOne = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.locationsUpdateOne = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
 
};
module.exports.locationsDeleteOne = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
  
};