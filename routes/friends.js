const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('friends', {
    nickname: req.session.nickname
  });
});

module.exports = router;
