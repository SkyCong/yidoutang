const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api', { 
      target: 'https://api.myjson.com/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }),
    proxy('/www', { 
      target: 'https://m.yidoutang.com/',
      changeOrigin: true,
      pathRewrite: {
        '^/www': ''
      }
    })
  )
}