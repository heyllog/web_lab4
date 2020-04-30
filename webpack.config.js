module.exports = {
    mode: "development",
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + '/main',
        filename: 'bundle.js',
        publicPath: '/'
    },
};
