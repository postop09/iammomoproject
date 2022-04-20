const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://52.79.45.37:8080",
      pathRewrite: {
        "^test": "",
      },
      headers: {
        "Contest-Type": "application/json",
      },
      changeOrigin: true,
    })
  );
};
