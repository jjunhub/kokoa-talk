const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  username = 'test';
  res.render('friends', {username});
});

module.exports = router;
