module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        extensions: [".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.js?$/, loader: "babel-loader" },
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};