module.exports = {
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /(node_modules)/, loader: 'babel'}
        ]
    },
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: './build',
        publicPath: '/trivia/',
        filename: 'index.js'
    }
};