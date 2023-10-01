var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controller/locations')
var ctrlOthers = require('../controller/others')

router.get('/', ctrlLocations.homelist);
router.get('/location/1', ctrlLocations.locationInfo1);
router.get('/location/2', ctrlLocations.locationInfo2);
router.get('/location/3', ctrlLocations.locationInfo3);

router.get('/location/review/new/1', ctrlLocations.addReview1);
router.get('/location/review/new/2', ctrlLocations.addReview2);
router.get('/location/review/new/3', ctrlLocations.addReview3);

router.get('/about', ctrlOthers.about);

module.exports = router;
