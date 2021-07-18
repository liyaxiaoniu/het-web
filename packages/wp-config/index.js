const WebpackDevServer = require('webpack-dev-server')
const WebpackDevMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const chalk = require('chalk')
const { merge } = require('webpack-merge')
const fs = require('fs-extra')
const express = require('express')
module.exports = {
  fs,
  chalk,
  merge,
  webpack,
  WebpackDevServer,
  WebpackDevMiddleware,
  express,
}
