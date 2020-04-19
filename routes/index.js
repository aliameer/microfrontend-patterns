const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('error.twig', { title: 'Error' });
});

module.exports = router;
