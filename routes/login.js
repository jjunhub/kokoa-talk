const express = require('express');
const router = express.Router();
const dbPool = require('../config/db');

router.post('/', async (req, res) => {
  try {
    dbPool.getConnection((err, connection) => {
      const { username, password } = req.body;
      const selectUser = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`;
      connection.query(selectUser, (error, results) => {
        if (results.length > 0) {
          const foundUsername = results[0].username;
          res.redirect(`/friends?username=${foundUsername}`);
        } else {
          res.redirect('/');
        }
        connection.release();
      });
    });
  } catch (error) {
    console.log("error: ", error);
  }
});

module.exports = router;