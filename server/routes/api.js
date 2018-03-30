const NUMBER = 32;

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
    handler: function (req, res) {

      let arr = new Array(NUMBER).fill(0);
      // TODO: get oracles
      return {
        oracles: arr
      };
    }
  });
};
