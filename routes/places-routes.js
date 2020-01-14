const express = require('express');

const router  = express.Router();

router.get('/', (req, res, next) =>{
  console.log('Get Req Places')
  res.json({message: 'Its Working'});
});

module.exports = router;