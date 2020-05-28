const express = require('express');
const path = require('path');
const router = express.Router();

router.get(['/', '/monolith'], (req, res, next) => {
  res.render('index.twig', { title: 'Pattern - Monolith' });
});

router.get('/monolith-spa-reactjs', function (req, res) {
  res.sendFile(path.resolve(`${__dirname}/../public/build`, 'index.html'));
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

router.get('/code-level-integration', (req, res, next) => {
  res.render('index-code-level-integration.twig', {
    title: 'Pattern - Code Level Integration',
  });
});

router.get('/csi', (req, res, next) => {
  res.render('index-csi.twig', {
    title: 'Pattern - Client-Side-Includes(CSI)',
    microfrontendBaseUrl: 'http://localhost:3000',
  });
});

router.get('/iframe/:microfrontend(user|carts|catalogue)', (req, res, next) => {
  const microfrontend = req.params.microfrontend;
  res.render(`microfrontends/${microfrontend}/${microfrontend}-iframe.twig`);
});

router.get('/client-side-iframes', (req, res, next) => {
  res.render('index-iframes.twig', {
    title: 'Pattern - Client-Side-Iframes',
    microfrontendBaseUrl: 'http://localhost:3000',
  });
});

module.exports = router;
