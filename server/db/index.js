// Postgres
const pg = require('../config/db');
const pgp = require('pg-promise')();
const db = pgp(pg);

module.exports = {
  create: function ({ title, description }) {
    return new Promise((resolve, reject) => {
      db.one(
        'INSERT INTO oracles (title, description) VALUES ($1, $2) RETURNING id',
        [title, description]
      )
        .then(({ id }) => {
          resolve(id)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  get: function (id) {
    return db.one('SELECT * FROM oracles WHERE id = $1', [id])
  },
  all: function () {
    return db.any('SELECT * FROM oracles')
  }
}
