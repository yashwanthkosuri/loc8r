var express = require('express');
var router = express.Router();
<<<<<<< HEAD
var ctrlLocations = require('../controller/locations')
var ctrlOthers = require('../controller/others')

router.get('/', ctrlLocations.homelist);
router.get('/location/1', ctrlLocations.locationInfo1);
router.get('/location/2', ctrlLocations.locationInfo2);
router.get('/location/3', ctrlLocations.locationInfo3);

router.get('/location/review/new/1', ctrlLocations.addReview1);
=======
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location2', ctrlLocations.locationInfo2);
router.get('/location3', ctrlLocations.locationInfo3);

router.get('/location/review/new', ctrlLocations.addReview);
>>>>>>> f7ad43d13b80cf7859d91d2d704298b11482d14e
router.get('/location/review/new/2', ctrlLocations.addReview2);
router.get('/location/review/new/3', ctrlLocations.addReview3);

router.get('/about', ctrlOthers.about);

module.exports = router;
