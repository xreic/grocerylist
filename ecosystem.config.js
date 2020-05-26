const { options } = require('./env.js');

module.exports = {
  apps: [
    {
      name: 'express-postgraphile',
      script: './server/server.js',
      watch: true,
      env_dev: Object.assign({ NODE_ENV: 'development' }, options),
      env_prod: Object.assign({ NODE_ENV: 'production' }, options)
    }
  ]
};
