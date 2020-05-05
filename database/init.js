const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  database: 'postgres',
  port: 5432
});

(async () => {
  const client = await pool.connect();
  console.log('Pool has filled.');

  try {
    await client.query('DROP TABLE IF EXISTS gList;');
    console.log('Dropped table.');

    await client.query(`
      CREATE TABLE IF NOT EXISTS gList (
        id SERIAL PRIMARY KEY,
        uuid TEXT,
        item TEXT,
        quantity INTEGER,
        status BOOLEAN);
    `);
    console.log('Created table.');

    await client.end();
    console.log('Session closed.');
  } catch (error) {
    console.log('Error');
  }
})();
