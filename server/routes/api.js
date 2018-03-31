const db = require('../db');

module.exports = server => {
  server.route({
    method: 'GET',
    path: '/api/oracle/{id}',
    handler: function (req, res) {
      const { id } = req.params;
      const { payload } = req;

      // TODO: get one oracle by id
      return {
        id,
        oracle: payload
      };
    }
  });

  server.route({
    method: 'POST',
    path: '/api/oracle',
    handler: function (req, res) {
      const { payload } = req;

      // TODO: create new oracle
      return {
        id: 'new',
        oracle: payload
      };
    }
  });

  server.route({
    method: 'GET',
    path: '/api/oracle',
    handler: async function (req, res) {

      const data = await db.all()

      return {
        oracles: data
      };
    }
  });
};
