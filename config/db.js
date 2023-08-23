const express = require('express');
const mysql = require('mysql');

const dbOption = {
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
}

const dbPool = mysql.createPool(dbOption);

module.exports = { dbPool, dbOption };