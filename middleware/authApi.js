var express = require('express');
var jwt = require('jsonwebtoken');

const authApi = (req, res, next) => {

  console.log("authenticating api request")


  const key = req.body.key || req.query.key || req.headers['x-access-token'];

  var decoded = jwt.verify(key, 'secretcode');
  console.log(decoded.email)
  let found = false;
  if (decoded.email === 'kirsten.frager@hotmail.com') {
    found = true;
  }

  if (found) {
    next();
  } else {
    res.json(401, {
      success: false,
      message: 'Not Authorized',
    });
  };
};

module.exports = authApi;
