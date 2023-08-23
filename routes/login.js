const express = require('express');
const router = express.Router();
const {dbPool} = require('../config/db');

router.post('/', async (req, res) => {
  try {
    dbPool.getConnection((err, connection) => {
      const { username, password } = req.body;
      const selectUser = `SELECT * FROM users WHERE username = ? AND password= ?`;
      connection.query(selectUser, [username, password], (error, results) => {
        if (results.length > 0) {
          req.session.username =  results[0].username;
          res.redirect(`/friends`);
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