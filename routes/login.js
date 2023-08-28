const express = require('express');
const router = express.Router();
const {dbPool} = require('../config/db');

router.post('/', async (req, res) => {
  try {
    dbPool.getConnection((err, connection) => {
      const { email, password } = req.body;
      const selectUser = `SELECT * FROM users WHERE email = ? AND password= ?`;
      connection.query(selectUser, [email, password], (error, results) => {
        if (results.length > 0) {
          req.session.nickname =  results[0].nickname;
          res.redirect('/friends');
        } else {
          res.redirect('/');
        }
        connection.release();
      });
    });
  } catch (error) {
    console.error("error: ", error);
  }
});

module.exports = router;