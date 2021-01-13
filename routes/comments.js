const express = require('express');
const router = express.Router();

const commentsCtrl = require('../controllers/commentsCtrl');

router.post('/blog/:id/comments', commentsCtrl.create);

module.exports = router;