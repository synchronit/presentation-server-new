const webpack = require('webpack');

module.exports = {
    entry: ["babel-polyfill","./src/app.js"],
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    module: {
        loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.Tether": "tether",
            "fetch": "isomorphic-fetch"
        })
    ]
};
