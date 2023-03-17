const { merge } = require('webpack-merge');
const COMMON_CONFIG = require('./webpack.common');

module.exports = (env) => {

    return merge(COMMON_CONFIG(env), { mode: 'production' })
}
