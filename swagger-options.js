const baseDescription = `
  To try any pattern, instead of clicking on the "Try it out" button,
  please read the description of each pattern.
`;

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Microfrontend Patterns',
      version: '1.0.0',
      description: baseDescription,
    },
    tags: [
      { name: 'Monolith' },
      { name: 'Client-Side' },
      { name: 'Server-Side' },
      { name: 'Hybrid' },
      { name: 'Not-Implemented' },
    ],
  },
  apis: ['./routes/*.js'],
};

module.exports = options;
