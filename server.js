// DD Logger via winston module
const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info',
  exitOnError: false,
  format: format.json(),
  transports: [
    new transports.File({ filename: `${appRoot}/logs/<FILE_NAME>.log` }),
  ],
});

module.exports = logger;

// Example logs
logger.log('info', 'Hello simple log!');
logger.info('Hello log with metas',{color: 'blue' });


// DD Express Integration
var dd_options = {
    'response_code':true,
    'tags': ['app:my_app']
      }
  
  var connect_datadog = require('connect-datadog')(dd_options);
  
  // Add your other middlewares
//   app.use(...);
  
  // Add the datadog-middleware before your router
  app.use(connect_datadog);
  app.use(router);