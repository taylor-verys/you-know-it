var path = require('path');
var webpack = require('webpack');

module.exports = {
    module: {
        loaders: [
            { test: /\.jsx?$/, include: path.join(__dirname, 'src'), loaders: ['react-hot', 'babel?stage=0']},
            { test: /\.scss/, include: path.join(__dirname, 'src'), loaders: ['style', 'css', 'sass']}
        ]
    },
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js',
        publicPath: '/trivia/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
