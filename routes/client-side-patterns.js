const express = require('express');
const router = express.Router();

/**
 * @swagger
 * path:
 *  /client-side/code-level-integration:
 *    get:
 *      description: To try the pattern, click [here](http://localhost:3000/client-side/code-level-integration).
 *      tags: [Client-Side]
 *      responses:
 *        "200":
 *          description: A webpage that implements the application.
 */
router.get('/code-level-integration', (req, res, next) => {
  res.render('index-code-level-integration.twig', {
    title: 'Pattern - Client-Side Code Level Integration',
    microfrontendBaseUrl: process.env.MICROFRONTEND_BASE_URL,
  });
});

/**
 * @swagger
 * path:
 *  /client-side/csi:
 *    get:
 *      summary: Client-Side Includes.
 *      description: To try the pattern, click [here](http://localhost:3000/client-side/csi).
 *      tags: [Client-Side]
 *      responses:
 *        "200":
 *          description: A webpage that implements the application.
 */
router.get('/csi', (req, res, next) => {
  res.render('index-csi.twig', {
    title: 'Pattern - Client-Side Includes (CSI)',
    microfrontendBaseUrl: process.env.MICROFRONTEND_BASE_URL,
  });
});

/**
 * @swagger
 * path:
 *  /client-side/microfrontend-per-view:
 *    get:
 *      summary: Pattern not implemented.
 *      description: To try the pattern, click [here](http://localhost:3000/client-side/microfrontend-per-view).
 *      tags: [Client-Side, Not-Implemented]
 *      responses:
 *        "200":
 *          description: n/a.
 */
router.get('/microfrontend-per-view', (req, res, next) => {
  res.send('Pattern not implemented');
});

/**
 * @swagger
 * path:
 *  /client-side/multiple-microfrontends-per-view:
 *    get:
 *      summary: Implemented using Single-SPA framework.
 *      description: To try the pattern, click [here](http://localhost:3000/client-side/multiple-microfrontends-per-view).
 *      tags: [Client-Side]
 *      responses:
 *        "200":
 *          description: A webpage that implements the application.
 */
router.get('/multiple-microfrontends-per-view', (req, res, next) => {
  res.render('index-client-side-multiple-microfrontends-per-view.twig', {
    title: 'Pattern - Client-Side Multiple Microfrontends per View',
    microfrontendBaseUrl: process.env.MICROFRONTEND_BASE_URL,
  });
});

/**
 * @swagger
 * path:
 *  /client-side/iframes:
 *    get:
 *      summary: Partial implementation only.
 *      description: To try the pattern, click [here](http://localhost:3000/client-side/iframes).
 *      tags: [Client-Side]
 *      responses:
 *        "200":
 *          description: A webpage that implements the application.
 */
router.get('/iframes', (req, res, next) => {
  res.render('index-iframes.twig', {
    title: 'Pattern - Client-Side Composition using Iframes',
    microfrontendBaseUrl: process.env.MICROFRONTEND_BASE_URL,
  });
});

module.exports = router;
