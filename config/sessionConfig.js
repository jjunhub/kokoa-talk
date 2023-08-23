const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const {dbPool, dbOption} = require('./db');

const sessionStore = new MySQLStore(dbOption, dbPool); // Pool 방식으로 MySQL과 접근 진행

const sessionConfig = {
  key: 'session_cookie_name',
  secret: process.env.SESSION_SECRET,
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}

module.exports = sessionConfig;