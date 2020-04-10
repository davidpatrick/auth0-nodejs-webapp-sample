const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const router = express.Router();

/* GET user profile. */
router.get('/user', requiresAuth(), function (req, res, next) {
  res.render('user', {
    userProfile: JSON.stringify(req.openid.user, null, 2),
    title: 'Profile page'
  });
});

module.exports = router;
