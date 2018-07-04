'use strict';

import Hapi from 'hapi';
var corsHeaders = require('hapi-cors-headers')
import chalk  from 'chalk';
import clear  from 'clear';
import figlet  from 'figlet';
const ModelConstants = require('../app/constants/ModelConstants');
const secret = ModelConstants.AUTH_KEY;
import Routes from '../app/routes/index';
const config = require('config');
const Register = require('./register/index');
//Initializing Database Connection
const InitDB = require('../app/utils/InitDatabase');
//Resgistering Models
import Models from '../app/models/index';
//Initializing Hapi Server
const server = new Hapi.Server();
let environment = process.env.NODE_ENV || 'development';
clear();
console.log(
  chalk.yellow(
    figlet.textSync('HapiJS', { horizontalLayout: 'full' })
  )
);
//Setting up localhost/port
server.connection({
  host: config.self_host,
  port: config.self_port,
  routes: {
    cors: {
      origin: ['*'],
      additionalHeaders: ["Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-language", "X-Requested-With", "X-Powered-By", "Connection", "Content-Length"],
    }
  }
});
//Global URI Prefix
server.realm.modifiers.route.prefix = config.context_root;
//Adding All endpoints
server.route(Routes.endpoints);
//Cors fix
server.ext('onPreResponse', corsHeaders)

server.register(Register.plugins,(err) => {
  if(err) {
    console.error("Plugin registeration failed!");
  }
  server.auth.strategy('jwt', 'jwt', {
    key: secret,
    verifyOptions: { algorithms: ['HS256'] }
  });
  server.start((err) => {
    if(err) {
      console.error("Error in server start!");
      console.error(err);
    }
    server.log("info", "Server started successfully; Please check " + server.info.uri);
    server.log("info", "Running in: " + environment);
  });
});
