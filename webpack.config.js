/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { infinisoft } = require('./package.json');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: infinisoft.port,
  },
  devtool: 'inline-source-map',
});
