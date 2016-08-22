module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
        },{
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    }
}


//编译文件          {webpack    }
//编译并且压缩文件   {webpack  -p}  