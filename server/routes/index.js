const path = require('path');

// const staticRoute = require('./bundle');
// const mainRoute = require('./main');

module.exports = server => {
  // mainRoute(server);
  // staticRoute(server);

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, '../../build'),
        listing: true
      }
    }
  });
};
