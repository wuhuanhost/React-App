var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {//入口文件
        app: './src/index.js',
        vendors: ['react', 'react-dom', 'react-redux', 'redux']
    },
    output: {//输出文件
        path: './dist',
        publicPath: 'dist/',
        filename: 'app.bundle.js',
        chunkFilename: "app.bundle.js"
    },
    module: {
        loaders: [//加载器
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
                loader: 'url?limit=8192&name=img/[name].[ext]'
            }
        ]
    },
    plugins: [
        // css打包成独立文件
        new ExtractTextPlugin("css/[name].css"),
        //entry.venders中配置的依赖包，打包成vender.js
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendor.js'),
        // 压缩代码
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            except: ['$super', '$', 'exports', 'require']	//排除关键字
        }),
        new HtmlWebpackPlugin({//根据模板插入css/js等生成最终HTML
            title:'React-App',
            favicon: './src/img/favicon.ico', //favicon路径
            filename: '/view/index.html',	//生成的html存放路径，相对于 path
            template: './src/view/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: false,	//为静态资源生成hash值
            minify: {	//压缩HTML文件
                removeComments: true,	//移除HTML中的注释
                collapseWhitespace: true	//删除空白符与换行符
            }
        }),
        //
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
}


//编译文件          {webpack    }
//编译并且压缩文件   {webpack  -p}
