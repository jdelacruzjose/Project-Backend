const express     = require('express');

const router      = express.Router();
const Fake_Places = [
  {
    id:'p1',
    title: 'Empire State Building',

  }
]

router.get('/', (req, res, next) =>{
  console.log('Get Req Places')
  res.json({message: 'Its Working'});
});

module.exports = router;