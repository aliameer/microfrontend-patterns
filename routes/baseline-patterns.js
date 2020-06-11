const express = require('express');
const path = require('path');
const router = express.Router();

/**
 * @swagger
 * path:
 *  /monolith:
 *    get:
 *      summary: Baseline monolith application.
 *      tags: [Monolith]
 *      responses:
 *        "200":
 *          description: A webpage that implements the application.
 */
router.get('', (req, res, next) => {
  res.render('index.twig', {
    apiBaseUrl: process.env.API_BASE_URL,
    title: 'Pattern - Monolith',
  });
});

/**
 * @swagger
 * path:
 *  /monolith/spa-reactjs:
 *    get:
 *      summary: Baseline monolith application implemented using ReactJS.
 *      tags: [Monolith]
 *      responses:
 *        "200":
 *          description: A webpage that implements the application.
 */
router.get('/spa-reactjs', function (req, res) {
  res.sendFile(path.resolve(`${__dirname}/../public/build`, 'index.html'));
});

module.exports = router;
