const express = require('express');
const router = express.Router();

router.get('/code-level-integration', (req, res, next) => {
  res.render('index-code-level-integration.twig', {
    title: 'Pattern - Client-Side Code Level Integration',
  });
});

router.get('/csi', (req, res, next) => {
  res.render('index-csi.twig', {
    title: 'Pattern - Client-Side Includes (CSI)',
    microfrontendBaseUrl: 'http://localhost:3000',
  });
});

router.get('/microfrontend-per-view', (req, res, next) => {
  res.send('Pattern not implemented');
});

router.get('/multiple-microfrontends-per-view', (req, res, next) => {
  res.send('Pattern not implemented yet');
});

router.get('/iframes', (req, res, next) => {
  res.render('index-iframes.twig', {
    title: 'Pattern - Client-Side Composition using Iframes',
    microfrontendBaseUrl: 'http://localhost:3000',
  });
});

module.exports = router;
