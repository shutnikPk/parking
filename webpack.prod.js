const { merge } = require('webpack-merge');
const common_config = require('./webpack.common');

module.exports = (env) => {

    return merge(common_config(env), { mode: 'production' })
}
