/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Kids Channel - an Online educational platform',
        pageHeader: {
            title: 'Kids Channel',
            strapline: 'an Online educational platform!'
        },
        sidebar: "Looking for nursery rhymes and songs for children? Kids Channel helps you find graphic videos and nursery rhymes.",
        locations: [{
            name: 'Graphic videos',
            address: 'Graphic videos for Kids',
            rating: 4,
            facilities: ['Anime', 'Food', 'Cartoon'],
            distance: 'Trending',
            href: '/location/1'
        }, {
            name: 'Nursery rhymes',
            address: 'Nursery rhymes for Kids',
            rating: 4,
            facilities: ['Johny Johny Yes Papa ', 'Baa Baa Black Sheep', 'Wheels on the Bus'],
            distance: 'Popular',
            href: '/location/2'
        }, {
            name: 'Songs',
            address: 'Songs for Kids',
            rating: 3,
            facilities: ['Row, Row, Row Your Boat', 'Old MacDonald Had a Farm'],
            distance: 'Most viewed',
            href: '/location/3'
        }]
    });
  };
  
  /* GET 'Location info' page */
  module.exports.locationInfo1 = function(req, res) {
    res.render('location-info1', {
        title: 'Graphic videos',
        pageHeader: {
            title: 'Graphic videos'
        },
        sidebar: {
            context: 'is on Kids because it has accessible grphic videos to sit down with your laptop and listen with kids.',
            callToAction: 'If you\'ve listened and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Graphic videos',
            address: 'Graphic videos for Kids',
            rating: 4,
            facilities: ['Anime', 'Food', 'Cartoon'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Sukuna',
                rating: 5,
                timestamp: '16 October 2023',
                reviewText: 'What a great videos. I can\'t say enough good things about it.'
            }, {
                author: 'Gojo satoru',
                rating: 3,
                timestamp: '16 September 2023',
                reviewText: 'It was okay. Videos wasn\'t great, but the animation was good.'
            }]
        }
    });
  };

    /* GET 'Location info' page */
    module.exports.locationInfo2 = function(req, res) {
        res.render('location-info2', {
            title: 'Nursery rhymes',
            pageHeader: {
                title: 'Nursery rhymes'
            },
            sidebar: {
                context: 'is on Kids channel because it has accessible nursery rhymes to sit down with your laptop and listen with kids.',
                callToAction: 'If you\'ve listened and you like it - or if you don\'t - please leave a review to help other people just like you.'
            },
            location: {
                name: 'Nursery rhymes',
                address: 'Nursery rhymes for Kids',
                rating: 4,
                facilities: ['Johny Johny Yes Papa ', 'Baa Baa Black Sheep', 'Wheels on the Bus'],
                coords: {
                    lat: 51.455041,
                    lng: -0.9690884
                },
                openingTimes: [{
                    days: 'Monday - Friday',
                    opening: '7:00am',
                    closing: '7:00pm',
                    closed: false
                }, {
                    days: 'Saturday',
                    opening: '8:00am',
                    closing: '5:00pm',
                    closed: false
                }, {
                    days: 'Sunday',
                    closed: true
                }],
                reviews: [{
                    author: 'Gojo satoru',
                    rating: 5,
                    timestamp: '16 September 2023',
                    reviewText: 'What a great rhymes. I can\'t say enough good things about it.'
                }, {
                    author: 'Sukuna',
                    rating: 3,
                    timestamp: '16 August 2023',
                    reviewText: 'It was okay. Rhymes wasn\'t great, but the quality was great.'
                }]
            }
        });
      };

        /* GET 'Location info' page */
  module.exports.locationInfo3 = function(req, res) {
    res.render('location-info3', {
        title: 'Songs',
        pageHeader: {
            title: 'Songs'
        },
        sidebar: {
            context: 'is on Kids channel because it has accessible songs to sit down with your laptop and listen with kids.',
            callToAction: 'If you\'ve listened and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Songs',
            address: 'Songs for Kids',
            rating: 3,
            facilities: ['Row, Row, Row Your Boat', 'Old MacDonald Had a Farm'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Gojo satoru',
                rating: 5,
                timestamp: '16 July 2023',
                reviewText: 'What a great songs. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 201=23',
                reviewText: 'It was okay. songs wasn\'t great, but the quality was great.'
            }]
        }
    });
  };

  /* GET 'Add review' page */
  module.exports.addReview1 = function(req, res) {
    res.render('location-review-form1', {
        title: 'Review Graphic videos on Kids channel',
        pageHeader: {
            title: 'Review Graphic videos'
        }
    });
  };
  
  /* GET 'Add review' page */
  module.exports.addReview2 = function(req, res) {
    res.render('location-review-form2', {
        title: 'Review Nursery rhymes on Kids channel',
        pageHeader: {
            title: 'Review Nursery rhymes'
        }
    });
  };

  /* GET 'Add review' page */
  module.exports.addReview3 = function(req, res) {
    res.render('location-review-form3', {
        title: 'Review Songs on Kids channel',
        pageHeader: {
            title: 'Review Songs'
        }
    });
  };