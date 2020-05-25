const options = {
  AWS_ENDPOINT: 'AWS_ENDPOINT',
  AWS_USER: 'AWS_USER',
  AWS_PASSWORD: 'AWS_PASSWORD',
  AWS_PORT: 'AWS_PORT',
  DATABASE_NAME: 'DATABASE_NAME',
  DATABASE_SCHEMA: 'DATABASE_SCHEMA',
  DATABASE_INIT_PASSWORD: 'DATABASE_INIT_PASSWORD',
  POSTGRAPHILE_PASSWORD: 'POSTGRAPHILE_PASSWORD',
  APP_SECRET: 'APP_SECRET'
  // PORT: '4000',
  // SERVER_PORT: '4001'
};

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
