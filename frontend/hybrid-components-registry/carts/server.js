export const data = (context, callback) => {
  const { name } = context.params;
  const { staticPath } = context;

  context.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  callback(null, {
    name,
    staticPath,
  });
};
