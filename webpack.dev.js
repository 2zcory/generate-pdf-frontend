const path = require("path");
const { default: merge } = require("webpack-merge");
const common = require("./webpack.common");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },

    devServer: {
        host: '192.168.1.23',
        port: 8000,
    }

    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: "./src/index.html",
    //         filename: "index.html",
    //     })
    // ]

})