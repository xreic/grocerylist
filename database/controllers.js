//Dependencies
const { query } = require('./index');

module.exports = {
  get: async (req, res) => {
    const queryString = {
      text: 'SELECT * FROM gList'
    };

    try {
      const { rows } = await query(queryString);

      res.status(200).send(rows).end();
    } catch (error) {
      console.error('Controllers - Get - Error');
      console.error(error);
      res.status(400).send(error).end();
    }
  },

  post: async (req, res) => {
    const { uuid, item, quantity, status } = req.body;
    const queryString = {
      text:
        'INSERT INTO gList (uuid, item, quantity, status) VALUES ($1, $2, $3, $4)',
      values: [uuid, item, quantity, status]
    };

    try {
      await query(queryString);

      res.status(200).send().end();
    } catch (error) {
      console.error('Controllers - Post - Error');
      console.error(error);
      res.status(400).send(error).end();
    }
  },

  put: async (req, res) => {
    const { status, uuid } = req.body;
    const queryString = {
      text: 'UPDATE glist SET STATUS = $1 WHERE UUID = $2',
      values: [status, uuid]
    };

    try {
      await query(queryString);

      res.status(200).send().end();
    } catch (error) {
      console.error('Controllers - Post - Error');
      console.error(error);
      res.status(400).send(error).end();
    }
  }
};
