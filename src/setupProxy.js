// const proxy = require('http-proxy-middleware');

// module.exports = app => {
//   app.use('/api', proxy({ target: 'http://localhost:4000' }));
// };

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use('/api', createProxyMiddleware({ target: 'http://localhost:4000' }));
};
