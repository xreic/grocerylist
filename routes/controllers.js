//Dependencies
const { v4: uuidv4 } = require('uuid');
const { query } = require('../database/index');

module.exports = {
  post: async (req, res) => {
    const queryString = {
      text: `INSERT INTO gList (uuid, item, quantity) VALUES ($1, $2, $3)`,
      values: [uuidv4(), req.body.item, req.body.quantity],
      rowMode: 'array'
    };

    try {
      await query(queryString);

      res
        .status(200)
        .send({ item: req.body.item, quantity: req.body.quantity })
        .end();
    } catch (error) {
      console.error('Controllers - Get - Error');
      console.error(error);
      res.status(400).send(error).end();
    }
  }
};
