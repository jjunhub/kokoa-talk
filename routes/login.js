const express = require('express');
const router = express.Router();

router.post('/', (req,res)=> {
  const {username, password} = req.body;
  /* Login Logic part */
  //console.log("Login successful!");
  session = username;
  console.log(session)
  res.redirect('/friends');
})

module.exports = router;
