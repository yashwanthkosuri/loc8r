var mongoose = require('mongoose');
var Loc = mongoose.model('Location');
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