// Dependencies
const express = require('express');
const router = express.Router();

const controllers = require('./controllers');

router.get('/', controllers.get);
router.post('/', controllers.post);
// router.delete('/', controllers.deleteAll);

// router.delete('/:id', controllers.deleteOne);
// router.put('/:id', controllers.put);

module.exports = router;
