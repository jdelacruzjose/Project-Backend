const express     = require('express');

const router      = express.Router();
const Fake_Places = [
  {
    id:'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world',
    location: {
      lat: 40.7484474,
      lng: -73.9871516
    },
    address: '20 W 34th St, New York, NY 10001',
    creator: 'u1'

  }
];

router.get('/:pid', (req, res, next) =>{
  const placeId = req.params.pid;
  
  const place   = Fake_Places.find(p => {
    return p.id === placeId
  });

  if (!place) {
    const error = new Error('Could not find place for this id.');
    error.code  = 404;
    throw error;
  }
  
  res.json({place});
});

router.get('/user/:uid', (req, res, next) =>{
  const userID = req.params.uid;

  const place = Fake_Places.find(p => {
    return p.creator === userID;
  });

  if (!place) {
    const error = new Error('Could not find place for this user id.');
    error.code  = 404;
    return next(error);
  }
  
  res.json({place});
});

module.exports = router;