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
    const { uuid, item, quantity } = req.body;
    const queryString = {
      text: 'INSERT INTO gList (uuid, item, quantity) VALUES ($1, $2, $3)',
      values: [uuid, item, quantity]
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
