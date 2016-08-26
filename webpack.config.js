var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {//入口文件
        app: __dirname + '/src/index.js',
        vendors: ['react', 'react-dom', 'react-redux', 'redux']
    },
    output: {//输出文件
        path: __dirname + '/dist',
        publicPath: 'http://localhost:9696/',
        filename: 'assets/app.bundle.js',
        chunkFilename: "assets/app.bundle.js"
    },
    stats: {//控制台打印配置
        color: true,
        reasons: false
    },
    // 生成sourcemap
    devtool: ['sourcemap'],
    //文件路径的指向
    resolve: {
        extensions: ['', '.js', 'jsx'],
        //配置别名,在项目中可以缩短引用资源require('styles/main.css')相当于require('src/styles/main.css')
        alias: {
            styles: __dirname + "/src/styles"
        }
    },
    module: {
        preLoaders: [{//前置loader
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'eslint-loader'
        }],
        loaders: [//加载器
            {
                test: /\.(js|jsx)$/,
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
            }, {//加载json
                test: /\.json$/, loader: "json"
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192&name=images/[name].[ext]'
            }, {//处理sass
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            }
        ]
    },
    plugins: [
        // css打包成独立文件
        new ExtractTextPlugin("assets/[name].css"),
        //entry.venders中配置的依赖包，打包成vender.js
        new webpack.optimize.CommonsChunkPlugin('vendors', 'assets/vendor.js'),
        // 压缩代码
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            except: ['$super', '$', 'exports', 'require']	//排除关键字
        }),
        new HtmlWebpackPlugin({//根据模板插入css/js等生成最终HTML
            title: 'React-App',
            favicon: __dirname + '/src/images/favicon.ico', //favicon路径
            filename: 'index.html',	//生成的html存放路径，相对于 path
            template: __dirname + '/src/view/index.html',	//html模板路径
            inject: true,	//允许插件修改哪些内容，包括head与body
            hash: true,	//为静态资源生成hash值
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
