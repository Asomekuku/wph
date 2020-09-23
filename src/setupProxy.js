const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  // eslint-disable-next-line no-unused-expressions
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://h5.vip.com", //目标服务器
      changeOrigin: true,
    })
  ),
    app.use(
      "/dp",
      createProxyMiddleware({
        target: "https://mst.vip.com", //目标服务器
        changeOrigin: true,
      })
    ),
    app.use(
      "/vips-mobile/rest",
      createProxyMiddleware({
        target: "https://mapi-rp.vip.com",
        changeOrigin: true,
      })
    );
};
