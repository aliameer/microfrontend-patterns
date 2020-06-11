const express = require('express');
const router = express.Router();

const ESI = require('nodesi');
const esi = new ESI({});

/**
 * @swagger
 * path:
 *  /server-side/microfrontend-per-view:
 *    get:
 *      summary: Pattern not implemented
 *      tags: [Server-Side, Not-Implemented]
 *      responses:
 *        "200":
 *          description: n/a
 */
router.get('/microfrontend-per-view', (req, res, next) => {
  res.send('Pattern not implemented');
});

/**
 * @swagger
 * path:
 *  /server-side/ssi:
 *    get:
 *      summary: Server-Side Includes
 *      tags: [Server-Side]
 *      responses:
 *        "200":
 *          description: A webpage that implements the application.
 */
router.get('/ssi', (req, res, next) => {
  res.render('index-ssi.twig', {
    title: 'Pattern - Server-Side Includes (SSI)',
    apiBaseUrl: process.env.API_BASE_URL,
  });
});

/**
 * @swagger
 * path:
 *  /server-side/esi:
 *    get:
 *      summary: Edge-Side Includes
 *      tags: [Server-Side]
 *      responses:
 *        "200":
 *          description: A webpage that implements the application.
 */
router.get('/esi', (req, res, next) => {
  res.render(
    'index-esi.twig',
    {
      title: 'Pattern - Edge-Side Includes (ESI)',
      microfrontendBaseUrl: process.env.MICROFRONTEND_BASE_URL,
    },
    async (err, html) => res.send(await esi.process(html))
  );
});

module.exports = router;
