var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location2', ctrlLocations.locationInfo2);
router.get('/location3', ctrlLocations.locationInfo3);

router.get('/location/review/new', ctrlLocations.addReview);
router.get('/location/review/new/2', ctrlLocations.addReview2);
router.get('/location/review/new/3', ctrlLocations.addReview3);

router.get('/about', ctrlOthers.about);

module.exports = router;
