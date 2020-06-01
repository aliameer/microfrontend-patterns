const express = require('express');
const path = require('path');
const router = express.Router();

router.get('', (req, res, next) => {
  res.render('index.twig', { title: 'Pattern - Monolith' });
});

router.get('/spa-reactjs', function (req, res) {
  res.sendFile(path.resolve(`${__dirname}/../public/build`, 'index.html'));
});

module.exports = router;
