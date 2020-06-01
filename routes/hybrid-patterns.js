const express = require('express');
const router = express.Router();

router.get('/fragment-composition', (req, res, next) => {
  res.render('index-hybrid-fragment-composition.twig', {
    title: 'Pattern - Hybrid Fragment Composition',
    componentRegistryBaseUrl: 'http://localhost:3030',
  });
});

module.exports = router;
