const webpack = require('webpack');

module.exports = function override(config, env) {
    // New config, e.g. config.plugins.push...
    config.plugins.push(
         new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        })
    )

    config.resolve.fallback = {
        "http": require.resolve("stream-http"),
        "https": require.resolve('https-browserify'),
        "buffer": require.resolve('buffer'),
    }

    return config
}
