require('dotenv').config();
const express = require('express');
const path = require('path');
const session = require('express-session');
const sessionConfig = require('./config/sessionConfig');

const app = express();
const port = 8888;
const viewsPath = path.join(__dirname, 'views');

app.use(express.static('public'));
app.set('views', viewsPath); 
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(session(sessionConfig));

const indexRouter = require('./routes/index');
const friendsRouter = require('./routes/friends');
const chatsRouter = require('./routes/chats');
const chatRouter = require('./routes/chat');
const moreRouter = require('./routes/more');
const settingRouter = require('./routes/setting');
const findRouter = require('./routes/find');
const loginRouter = require('./routes/login');

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