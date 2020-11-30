const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const path = require("path");

module.exports = {
    entry: {
        main: "./src/index.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[contentHash].[ext]",
                        outputPath: "images"
                    }
                }
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/html/index.html",
            filename: "index.html",
        }),

        // partial and img
        new HtmlWebpackPartialsPlugin({
            path: './src/assets/header.html',
            template_filename: '*',
            priority: "high"
        }),
        new HtmlWebpackPartialsPlugin({
            path: './src/assets/footer.html',
            template_filename: '*',
            priority: "low",
        }),
        new HtmlWebpackPlugin({
            template: "./src/assets/img.html",
            filename: "delete/img.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/assets/footer.html",
            filename: "delete/footer.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/assets/header.html",
            filename: "delete/header.html",
        })
    ],

    resolve: {
        alias: {
            html: path.resolve(__dirname, "src/html/"),
            assets: path.resolve(__dirname, "src/assets/"),
            app: path.resolve(__dirname, "src/app/"),
            style: path.resolve(__dirname, "src/scss/"),

            // exact file import
            izApp$: path.resolve(__dirname, "src/app/app.js"),
            scss$: path.resolve(__dirname, "src/scss/main.scss"),
        }
    }

}