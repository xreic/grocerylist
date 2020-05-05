// Dependencies
const express = require('express');
const router = express.Router();

const controllers = require('../database/controllers.js');

router.get('/', controllers.get);
router.post('/', controllers.post);
router.put('/', controllers.put);

// router.delete('/', controllers.deleteAll);
// router.delete('/:id', controllers.deleteOne);

module.exports = router;
