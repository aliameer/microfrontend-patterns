const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Microfrontend Patterns',
      version: '0.0.1',
    },
  },
  apis: ['./routes/*.js'],
};

module.exports = options;
