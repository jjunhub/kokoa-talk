const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const {dbPool} = require('./db'); 

const dbOption = {
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
}

const sessionStore = new MySQLStore(dbOption, dbPool);

const sessionConfig = {
  key: 'session_cookie_name',
  secret: process.env.SESSION_SECRET,
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}

module.exports = sessionConfig;