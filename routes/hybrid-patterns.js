const url = require('url');
const express = require('express');
const router = express.Router();
const cheerio = require('cheerio');
const Client = require('oc-client');

const ocClient = new Client({
  registries: {
    serverRendering: process.env.HYBRID_PATTERN_COMPONENT_REGISTRY_URL,
  },
  components: {
    user: '1.0.0',
    carts: '1.0.0',
    catalogue: '1.0.0',
  },
});

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
  res.render(
    'index-hybrid-fragment-composition.twig',
    {
      title: 'Pattern - Hybrid Fragment Composition',
      componentRegistryBaseUrl:
        process.env.HYBRID_PATTERN_COMPONENT_REGISTRY_URL,
    },
    async (err, html) => {
      const $ = cheerio.load(html);
      const componentToPreRender = $('oc-component[x-pre-render]');

      await ocClient.renderComponent(
        getComponentName(componentToPreRender.attr('href')),
        {
          container: false,
          timeout: 2,
        },
        (err, renderedComponentHtml) => {
          componentToPreRender.replaceWith(renderedComponentHtml);
          res.send($.html());
        }
      );
    }
  );
});

function getComponentName(href) {
  return url.parse(href).pathname.substring(1);
}

module.exports = router;
