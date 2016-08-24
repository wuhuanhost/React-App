var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: ['react', 'react-dom', 'react-redux', 'redux']
    },
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
                // loader:'style!css!less'
            }, {
                test: /\.css$/,
                // loader: "style!css!less"
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }, {
                test: /\.json/, loader: "json"
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8096'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        // 压缩代码
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}


//编译文件          {webpack    }
//编译并且压缩文件   {webpack  -p}
