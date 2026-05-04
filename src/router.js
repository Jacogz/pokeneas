const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/', controller.getRandomJson);
router.get('/detail', controller.getRandomDetail);

module.exports = router;