var webpack               = require('webpack'),
  HtmlWebpackPlugin       = require('html-webpack-plugin'),
  ComponentResolverPlugin = require('component-resolver-webpack'),
  OpenBrowserPlugin       = require('open-browser-webpack-plugin'),
  path                    = require('path'),
  srcPath                 = path.join(__dirname, 'src');

module.exports = {
    target: 'web',
    cache: true,
    entry: {
        app: [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
            path.join(srcPath, 'index.js')
        ],
        vendor: ['react', 'react-dom', 'react-router', 'hola-client']
    },
    output: {
        path: path.join(__dirname , 'dist'),
        filename: 'assets/[name].bundle.js',
        sourceMapFileName: "[name].js.map"
    },
    resolveLoader: {
        root: path.join(__dirname, "node_modules")
    },
    module: {
        loaders: [
            {
                test: /\.js(x)?$/,
                loader: 'babel-loader',
                include: srcPath,
                plugins: ["react-transform", "react-autoprefix"],
                extra: {
                    "react-transform": {
                        transforms: [{
                            transform: "react-transform-hmr",
                            imports: ["react"],
                            locals: ["module"]
                        }, {
                            transform: "react-transform-catch-errors",
                            imports: ["react", "redbox-react"]
                        }]
                    }
                }
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.(yaml|yml)$/,
                loader: 'json-loader!yaml-loader'
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }, // use ! to chain loaders
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=assets/fonts/[name].[ext]'
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            } // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules', 'src/components', 'node_modules/hola-client/lib']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'assets/vendor.js'),
        new webpack.optimize.DedupePlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: 'src/index.html'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ResolverPlugin([
            new ComponentResolverPlugin()
        ])/*,
        new OpenBrowserPlugin()*/ // doesn't for some reason, need to check in another env
    ],
    devtool: "source-map"
};
