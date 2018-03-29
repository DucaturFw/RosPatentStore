module.exports = server => {
  server.route({
    method: 'GET',
    path: '/api/hello',
    handler: function(req, res) {
      return { message: 'Hello World!' };
    }
  });
};
