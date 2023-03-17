const { merge } = require('webpack-merge');
const COMMON_CONFIG = require('./webpack.common');
const { DefinePlugin } = require('webpack');
module.exports = env => {

    return merge(COMMON_CONFIG(env), {
        mode: 'development',
        devtool: 'source-map'
    })
}
