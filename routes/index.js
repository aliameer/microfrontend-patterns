const express = require('express');
const router = express.Router();

router.get(['/', '/monolith'], (req, res, next) => {
  res.render('index.twig', { title: 'Pattern - Monolith' });
});

router.get('/ssi', (req, res, next) => {
  res.render('index-ssi.twig', {
    title: 'Pattern - Server-Side-Includes(SSI)',
  });
});

router.get(
  '/snippet/:microfrontend(user|carts|catalogue)',
  (req, res, next) => {
    const microfrontend = req.params.microfrontend;
    res.render(`microfrontends/${microfrontend}/${microfrontend}.twig`);
  }
);

router.get('/esi', (req, res, next) => {
  const ESI = require('nodesi');
  const esi = new ESI({});

  res.render(
    'index-esi.twig',
    {
      title: 'Pattern - Edge-Side-Includes(ESI)',
      microfrontendBaseUrl: 'http://localhost:3000',
    },
    async (err, html) => res.send(await esi.process(html))
  );
});

module.exports = router;
