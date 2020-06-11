const express = require('express');
const router = express.Router();

router.get(
  '/snippet/:microfrontend(user|carts|catalogue)',
  (req, res, next) => {
    const microfrontend = req.params.microfrontend;
    res.render(`microfrontends/${microfrontend}/${microfrontend}.twig`, {
      apiBaseUrl: process.env.API_BASE_URL,
    });
  }
);

router.get('/iframe/:microfrontend(user|carts|catalogue)', (req, res, next) => {
  const microfrontend = req.params.microfrontend;
  res.render(`microfrontends/${microfrontend}/${microfrontend}-iframe.twig`);
});

module.exports = router;
