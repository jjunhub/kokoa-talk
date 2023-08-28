const express = require('express');
const router = express.Router();
const {dbPool} = require('../config/db');

router.post('/', (req, res)=> {
  try {
    dbPool.getConnection((err, connection)=> {
      const {nickname, password, phonenumber} = req.body;
      const email = req.session.email;
      const insertUser = `INSERT INTO users (username, email, password) VALUES (?, ?, ?);`;
      connection.query(insertUser, [nickname, email, password], (error, results) => {
            if (results.affectedRows === 1) {
              console.log("User inserted successfully");
              req.session.username = nickname;
              res.redirect('/friends');
            } else {
              console.log("User insertion failed");
              req.session.email = ""
            }
          }
        )
        connection.release();
      })
    } catch (error){
    console.log("error: ", error);
  }
});

router.get('/', (req,res)=> {
  res.render('signup',
      {
        emailChecked : false,
        emailValue : false
      });
})

module.exports = router;