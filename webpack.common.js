/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const path = require('path');

const { ModuleFederationPlugin } = require('webpack').container;
const { name, infinisoft } = require('./package.json');

module.exports = {
  context: process.cwd(),
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: '{{lib}}',
    publicPath: 'auto',
  },
  resolve: {
    cacheWithContext: false,
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript', '@babel/preset-env'],
            plugins: ['lodash'],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name,
      filename: 'remoteEntry.js',
      library: {
        type: 'var',
        name,
      },
      remotes: infinisoft.moduleFederation.remotes,
      exposes: infinisoft.moduleFederation.exposes,
    }),
  ],
};
