const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillWebpackPlugin = require('node-polyfill-webpack-plugin');


module.exports = (env, options) => {
    return {
        mode: options.mode || 'development',
        entry: path.resolve(__dirname, 'src/app.tsx'),
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'static/js/[name].[contenthash].bundle.js',
            publicPath: '/'
        },
        devtool: options.mode === 'development' && 'inline-cheap-source-map',
        devServer: {
            compress: true,
            historyApiFallback: true,
            client: {
                overlay: true,
                logging: 'warn'
            }
        },
        resolve: {
            extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
        },
        module: {
            rules: [ {
                test: /\.jsx?$/,
                exclude: /node_modules|libs/,
                loader: 'babel-loader',
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules|libs/,
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'postcss-loader'
                ],
            },
            {
                test: /\.(jpeg|jpg|png|gif|svg|ico|eot|woff|ttf|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/assets/[name].[contenthash][ext][query]',
                },
            },
            ]
        },
        plugins: [
            new NodePolyfillWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: 'static/css/[name].[contenthash].css',
            }),
            new HTMLWebpackPlugin({
                filename: './index.html',
                template: './src/index.ejs',
                favicon: './src/favicon.ico',
            }),
        ]
    };
};
