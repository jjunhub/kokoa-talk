const express = require('express');
const router = express.Router();
const {dbPool} = require('../config/db');

router.post('/', (req, res)=> {
  try {
    dbPool.getConnection((err, connection)=> {
      const {nickname, password, phonenumber} = req.body;
      const email = req.session.email;
      const insertUser = `INSERT INTO users (nickname, email, password, phonenumber) VALUES (?, ?, ?, ?);`;
      connection.query(insertUser, [nickname, email, password, phonenumber], (error, results) => {
          if (results.affectedRows === 1) {
              console.log("User inserted successfully");
              req.session.nickname = nickname;
              res.redirect('/friends');
          } else {
              console.log("User insertion failed");
              req.session.email = ""
              res.redirect('/signup');
          }
      });
        connection.release();
      });
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