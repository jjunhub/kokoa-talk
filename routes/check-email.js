const express = require('express');
const {dbPool} = require("../config/db");
const router = express.Router();

router.post('/', (req,res)=>{
  try {
    dbPool.getConnection((err, connection) => {
      const { email } = req.body;
      console.log(email)
      const selectUser = `SELECT * FROM users WHERE email = ?`;
      connection.query(selectUser, [email], (error, results) => {
        if (results.length === 0) {
          req.session.email = email;
          res.render('signup', {
            emailChecked : true,
            emailValue : email
          });
        } else {
          res.redirect('/signup');
        }
        connection.release();
      });
    });
  } catch (error) {
    console.error("error: ", error);
  }
})
module.exports = router;