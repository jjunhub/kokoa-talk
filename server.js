require('dotenv').config();
const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const friendsRouter = require('./routes/friends');
const chatsRouter = require('./routes/chats');
const chatRouter = require('./routes/chat');
const moreRouter = require('./routes/more');
const settingRouter = require('./routes/setting');
const findRouter = require('./routes/find');
const loginRouter = require('./routes/login');

const app = express();
const port = 8888;
const viewsPath = path.join(__dirname, 'views');

app.engine('.html', require('ejs').renderFile);
app.use(express.static('public'));
app.set('views', viewsPath); 
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// End with .html
app.get('/:pageName.html', (req, res) => {
  const pageName = req.params.pageName;
  res.redirect(`${pageName}`);
});

app.use('/login', loginRouter);
app.use('/', indexRouter);
app.use('/friends', friendsRouter);
app.use('/setting', settingRouter);
app.use('/more', moreRouter);
app.use('/chat', chatRouter);
app.use('/chats', chatsRouter);
app.use('/find',findRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});