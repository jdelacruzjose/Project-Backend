const HttpError   = require('../models/http-error'); 
const uuid        = require('uuid/v4');

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

const getPlaceByID = (req, res, next) =>{
  const placeId = req.params.pid;
  
  const place   = Fake_Places.find(p => {
    return p.id === placeId
  });

  if (!place) {
    throw new HttpError('Could not find place for this id.', 404);
  }
  
  res.json({place});
}

const getPlaceByUserID = (req, res, next) =>{
  const userID = req.params.uid;

  const place = Fake_Places.find(p => {
    return p.creator === userID;
  });

  if (!place) {
    return next(
      new HttpError('Could not find place for this user id.', 404)
      );
    }
    
  res.json({place});
};

const createPlace =(req, res, next) =>{
  const {title, description, coordinates, address, creator} = req.body;

  const createdPlace = {
    id: uuid(),
    title,
    description,
    location: coordinates,
    address,
    creator
  };

  Fake_Places.push(createdPlace);

  res.status(201).json({place: createdPlace})
};

const updatePlace = (req, res, next) =>{
  const {title, description} = req.body;
  const placeId = req.params.pid;

  const updatePlace = { ...Fake_Places.find(p => p.id === placeId)};
  const placeIndex  = Fake_Places.findIndex(p => p.id === placeId) 
  updatePlace.title       = title;
  updatePlace.deletePlace = description;

  Fake_Places[placeIndex] = updatePlace;

  res.status(200).json({place: updatePlace});
};

const deletePlace = (req, res, next) =>{};

exports.getPlaceByID     = getPlaceByID;
exports.getPlaceByUserID = getPlaceByUserID;
exports.createPlace      = createPlace;
exports.updatePlace      = updatePlace;
exports.deletePlace      = deletePlace;