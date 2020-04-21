const express = require('express');
const router = express.Router();

router.get(['/', '/monolith'], (req, res, next) => {
  res.render('index.twig', { title: 'Pattern - Monolith' });
});

router.get('/ssi', (req, res, next) => {
  res.render('index-ssi.twig', { title: 'Pattern - Server-Side-Includes(SSI)' });
});

module.exports = router;
