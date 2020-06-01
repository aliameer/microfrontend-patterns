const express = require('express');
const router = express.Router();

/**
 * @swagger
 * path:
 *  /client-side/code-level-integration:
 *    get:
 *      tags: [Client-Side]
 *      responses:
 *        "200":
 *          description: A webpage that implements the application.
 */
router.get('/code-level-integration', (req, res, next) => {
  res.render('index-code-level-integration.twig', {
    title: 'Pattern - Client-Side Code Level Integration',
  });
});

/**
 * @swagger
 * path:
 *  /client-side/csi:
 *    get:
 *      summary: Client-Side Includes.
 *      tags: [Client-Side]
 *      responses:
 *        "200":
 *          description: A webpage that implements the application.
 */
router.get('/csi', (req, res, next) => {
  res.render('index-csi.twig', {
    title: 'Pattern - Client-Side Includes (CSI)',
    microfrontendBaseUrl: 'http://localhost:3000',
  });
});

/**
 * @swagger
 * path:
 *  /client-side/microfrontend-per-view:
 *    get:
 *      summary: Pattern not implemented
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
 *      summary: Implemented using Single-SPA framework
 *      tags: [Client-Side]
 *      responses:
 *        "200":
 *          description: A webpage that implements the application.
 */
router.get('/multiple-microfrontends-per-view', (req, res, next) => {
  res.send('Pattern not implemented yet');
});

/**
 * @swagger
 * path:
 *  /client-side/iframes:
 *    get:
 *      tags: [Client-Side]
 *      responses:
 *        "200":
 *          description: A webpage that implements the application.
 */
router.get('/iframes', (req, res, next) => {
  res.render('index-iframes.twig', {
    title: 'Pattern - Client-Side Composition using Iframes',
    microfrontendBaseUrl: 'http://localhost:3000',
  });
});

module.exports = router;
