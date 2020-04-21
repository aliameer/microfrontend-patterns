const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(`${__dirname}/../../public/`, 'javascripts'),
    filename: 'code-level-integration.js',
  },
};
