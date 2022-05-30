/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const { merge } = require('webpack-merge');
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const {peerDependencies, name, infinisoft} = require('./package.json')

module.exports = merge({}, {
  mode: 'development',
  entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
     library: "createstore",
    },
  devtool: 'inline-source-map',
});
