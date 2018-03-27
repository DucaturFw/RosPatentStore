const { Server } = require('hapi');
const { inspect } = require('util');

module.exports = {
  catchError,
  startServer
};

function catchError(error) {
  console.error(inspect(error, true, 1, true));
}

function startServer(server) {
  server.start(error => {
    if (error) {
      catchError(error);
    }

    console.log(`Sangay server running at: ${server.info.uri}`);
  });
}
