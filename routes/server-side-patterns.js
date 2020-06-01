const express = require('express');
const router = express.Router();

const ESI = require('nodesi');
const esi = new ESI({});

router.get('/microfrontend-per-view', (req, res, next) => {
  res.send('Pattern not implemented');
});

router.get('/ssi', (req, res, next) => {
  res.render('index-ssi.twig', {
    title: 'Pattern - Server-Side Includes (SSI)',
  });
});

router.get('/esi', (req, res, next) => {
  res.render(
    'index-esi.twig',
    {
      title: 'Pattern - Edge-Side Includes (ESI)',
      microfrontendBaseUrl: 'http://localhost:3000',
    },
    async (err, html) => res.send(await esi.process(html))
  );
});

module.exports = router;
