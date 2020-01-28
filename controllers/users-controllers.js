const uuid = require('uuid/v4')
const HttpError = require('../models/http-error');

const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Jose De la Cruz',
    email: 'jdelacruzjose@gmail.com',
    password: 'testing'
  }
]

const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS});
};

const signup = (req, res, next) => {
  const{ userName, email, password} = req.body;

  const createdUser = {
    id: uuid(),
    name,
    email,
    password
  };
  
  DUMMY_USERS.push(createdUser);

  res.status(201).json({user: createdUser});
};

const login = (req, res, next) => {
  const{ email, password} = req.body;

  const indentifiedUser = DUMMY_USERS.find(u => u.email === email);
    if(!indentifiedUser){
        throw new HttpError()
    }
};

exports.getUsers  = getUsers;
exports.signup    = signup;
exports.login     = login;
