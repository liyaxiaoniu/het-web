const { appDist, appPublic } = require('@rg-wp/share')

module.exports = {
  compress: true,
  contentBase: [appDist, appPublic],
  // disableHostCheck: true,

  // hot: true,

  headers: {
    'Access-Control-Allow-Origin': '*',
  },

  // watchOptions: {
  //   ignored: ['**/scripts/**/*', '**/node_modules'],
  // },

  // https: getHttpsConfig(),
  // host,
  // overlay: { warnings: false, errors: true },

  // overlay: true,
  // inline: true,

  historyApiFallback: true,

  // historyApiFallback: {
  //   // Paths with dots should still use the history fallback.
  //   // See https://github.com/facebook/create-react-app/issues/387.
  //   disableDotRule: true,
  //   index: 'build/index.html',
  //   // logger: true,
  // },
  // public: allowedHost,
  // `proxy` is run between `before` and `after` `webpack-dev-server` hooks
  // proxy: {},

  // before(app, server) {
  //   // Keep `evalSourceMapMiddleware` and `errorOverlayMiddleware`
  //   // middlewares before `redirectServedPath` otherwise will not have any effect
  //   // This lets us fetch source contents from webpack for the error overlay
  //   // app.use(evalSourceMapMiddleware(server));
  //   // // This lets us open files from the runtime error overlay.
  //   // app.use(errorOverlayMiddleware());
  //   if (fs.existsSync(paths.proxySetup)) {
  //     // This registers user provided middleware for proxy reasons
  //     require(paths.proxySetup)(app);
  //   }
  // },
  // after(app) {
  //   // Redirect to `PUBLIC_URL` or `homepage` from `package.json` if url not match
  //   app.use(redirectServedPath(paths.publicUrlOrPath));

  //   // This service worker file is effectively a 'no-op' that will reset any
  //   // previous service worker registered for the same host:port combination.
  //   // We do this in development to avoid hitting the production cache if
  //   // it used the same host and port.
  //   // https://github.com/facebook/create-react-app/issues/2272#issuecomment-302832432
  //   app.use(noopServiceWorkerMiddleware(paths.publicUrlOrPath));
  // },
}
