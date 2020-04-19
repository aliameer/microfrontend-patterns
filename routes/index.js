const express = require('express');
const router = express.Router();

router.get(['/', '/monolith'], (req, res, next) => {
  res.render('index.twig', { title: 'Pattern - Monolith' });
});

module.exports = router;
