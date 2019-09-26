const path = require('path');
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin");

const CopyPlugin = require('copy-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './src/app/app.module.js',
    output: {
        filename: 'bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, "src"),
        compress: true,
        port: 9012,
        // publicPath: "/dist/"
        publicPath: "/"
    },
    optimization: {
        minimizer: [
            new TerserJSPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                terserOptions: {

                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader']
            // },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /\.(scss)$/,
                use: [{
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: 'style-loader'
                    },
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: 'css-loader'
                    },
                    // {
                    //     // Loader for webpack to process CSS with PostCSS
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         plugins: function () {
                    //             return [
                    //                 require('autoprefixer')
                    //             ];
                    //         }
                    //     }
                    // },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    // options: {
                    //     minimize: true
                    // }
                }]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[name].[ext]',
                    outputPath: 'assets' //the icons will be stored in dist/assets folder
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new CopyPlugin([
            { from: 'src/app/views', to: 'views' },
            { from: 'src/app/img', to: 'img' },
            { from: 'src/app/images', to: 'images' },
            { from: 'src/app/favicon.ico', to: 'favicon.ico' },
            { from: 'src/app/.htaccess', to: '.htaccess' },
        ]),
        // new MiniCssExtractPlugin({
        //     filename: "[name].css",
        //     chunkFilename: "[id].css"
        // }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery',
        })
    ]
}