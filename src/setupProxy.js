
const { createProxyMiddleware } = require('http-proxy-middleware');
    module.exports = function(app) {
        app.use(
            '/api',
            createProxyMiddleware({
            target:'https://h5.vip.com',    //目标服务器
            changeOrigin: true
        })),
        app.use(
          '/dp',
          createProxyMiddleware({
            target:'https://mst.vip.com',    //目标服务器
            changeOrigin: true
          })),
        app.use(
        "/vips-mobile/rest",
        createProxyMiddleware({
          target: "https://mapi-rp.vip.com",
          changeOrigin: true,
        })),
        app.use(
          "/vips-mobile",
          createProxyMiddleware({
            target:"https://mapi.vip.com",
            changeOrigin:true,
          })
        )
    };

