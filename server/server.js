const Hapi = require('hapi');
const h2o2 = require('h2o2');
const inert = require('inert');
const vision = require('vision');

const { port, address } = require('./config');
const { catchError, startServer } = require('./helpers/funcs');
const addTemplateEngine = require('./helpers/templates');
const addRoutesToServer = require('./routes');

console.log(inert);

module.exports = async function initServer() {
  const server = Hapi.server();


  await server.register({ plugin: require('plugin_name') });
  server.register(
    [
      //   inert
      //   vision
      // h2o2
    ],
    err => {
      if (err) {
        catchError(err);
      }

      //     addRoutesToServer(server);
      //     addTemplateEngine(server);

      startServer(server);
    }
  );
};
