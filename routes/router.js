// Dependencies
const express = require('express');
const router = express.Router();

const controllers = require('./controllers');

router.post('/', controllers.post);
// router.post('/', controller.post);
// router.delete('/', controller.deleteAll);

// router.delete('/:id', controller.deleteOne);
// router.put('/:id', controller.put);

module.exports = router;
