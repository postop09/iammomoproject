const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:4000",
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

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/auth", {
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
