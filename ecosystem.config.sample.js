const options = {
  RDS_ENDPOINT: 'RDS_ENDPOINT',
  RDS_USER: 'RDS_USER',
  RDS_PASSWORD: 'RDS_PASSWORD',
  RDS_PORT: 'RDS_PORT',
  DATABASE_NAME: 'DATABASE_NAME',
  DATABASE_SCHEMA: 'DATABASE_SCHEMA',
  DATABASE_INIT_PASSWORD: 'DATABASE_INIT_PASSWORD',
  POSTGRAPHILE_PASSWORD: 'POSTGRAPHILE_PASSWORD',
  APP_SECRET: 'APP_SECRET',
  PGQL_PORT: '8000'
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
