const winston = require('winston');

const level = process.env.LOG_LEVEL || 'debug';

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: level,
      timestap: function () {
        return (new Date()).toISOString();
      }
    })
  ]
});

module.exports = logger;
