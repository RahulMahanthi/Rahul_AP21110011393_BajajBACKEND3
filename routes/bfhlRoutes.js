// routes/bfhlRoutes.js
const express = require('express');
const router = express.Router();
const bfhlController = require('../controllers/bfhlController');

router.post('/bfhl', bfhlController.handlePostRequest);
router.get('/bfhl', bfhlController.handleGetRequest);

module.exports = router;
