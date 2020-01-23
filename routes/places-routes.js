const express     = require('express');
const router      = express.Router();
const placeControllers = require('../controllers/places-controllers');

router.get('/:pid', placeControllers.getPlaceByID);

router.get('/user/:uid', placeControllers.getPlaceByUserID);

router.post('/', placeControllers.createPlace);

module.exports = router;