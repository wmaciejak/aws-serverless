'use strict';

var { pool } = require('./pg')

module.exports.getPostsFromPG = function () {
  return pool.query("SELECT id, title FROM posts")
    .then((result) => {
      pool.end();
      return result.rows
    })
}
