const express = require('express');
const path = require('path');

const app = express();
const port = 8888;
const viewsPath = path.join(__dirname, 'views');

app.engine('.html', require('ejs').renderFile);
app.use(express.static('public'));
app.set('views', viewsPath); 
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

let session = {};

app.get('/', (req,res) => {
  res.render('index');
})

app.post('/login', (req,res)=> {
  const {username, password} = req.body;
  /* Login Logic part */
  //console.log("Login successful!");
  session = username;
  res.redirect('/friends');
})

// End with .html
app.get('/:pageName.html', (req, res) => {
  const pageName = req.params.pageName;
  res.redirect(`${pageName}`);
});

app.get('/friends', (req,res)=> {
  username = session
  res.render('friends', {username});
});

app.get('/setting', (req,res)=> {
  res.render('setting');
});

app.get('/more', (req,res)=> {
  res.render('more');
});

app.get('/chat', (req,res)=> {
  res.render('chat');
});

app.get('/chats', (req,res)=> {
  res.render('chats');
});

app.get('/find', (req,res)=> {
  res.render('find');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});