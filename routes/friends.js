const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const {username} = req.query;
  res.render('friends', {
    username: username
  });
});

module.exports = router;
