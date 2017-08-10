'use strict';

require('dotenv').config();

exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://localhost/capstone';
     // console.log(exports.DATABASE_URL);
exports.TEST_DATABASE_URL = (
  process.env.TEST_DATABASE_URL ||
 'mongodb://localhost/test');
 console.log(exports.DATABASE_URL, 'database url');
exports.PORT = process.env.PORT || 8080;