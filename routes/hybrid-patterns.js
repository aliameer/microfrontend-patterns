const express = require('express');
const router = express.Router();

/**
 * @swagger
 * path:
 *  /hybrid/fragment-composition:
 *    get:
 *      summary: Implemented using OpenComponents framework.
 *      tags: [Hybrid]
 *      responses:
 *        "200":
 *          description: A webpage that implements the application.
 */
router.get('/fragment-composition', (req, res, next) => {
  res.render('index-hybrid-fragment-composition.twig', {
    title: 'Pattern - Hybrid Fragment Composition',
    componentRegistryBaseUrl: 'http://localhost:3030',
  });
});

module.exports = router;
