const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
    return {
        mode: options.mode || 'development',
        entry: './src/app.ts',
        output: {
            path: path.resolve(__dirname, './dist/'),
            filename: 'static/js/[name].[fullhash].bundle.js',
            publicPath: '/'
        },
        devtool: 'eval-cheap-source-map',
        devServer: {
            compress: true,
            historyApiFallback: true,
            client: {
                overlay: true,
                logging: 'warn'
            }
        },
        resolve: {
            extensions: [ '.js', '.jsx', '.ts', '.tsx' ]
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
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            minimize:  options.mode === 'production',
                            sourceMap: true,
                        }
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpeg|jpg|png|gif|svg|ico)$/,
                loader: 'file-loader',
                options: {
                    name: '/images/[name].[fullhash].[ext]',
                    esModule: false,
                },
            },
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'static/css/[name].[fullhash].css',
            }),
            new HTMLWebpackPlugin({
                filename: 'index.html',
                template: 'src/index.ejs',
                favicon: 'src/favicon.ico',
            }),
        ]
    };
};
