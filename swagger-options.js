const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Microfrontend Patterns',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'],
};

module.exports = options;
