### webpack+react+redux+es6  demo

+ api                   数据接口目录，用json数据模拟
+ logs                  日志目录 
+ src
    + action            action
    + containers        组件容器
    + components        组件
    + reduces           action处理器
    + img               图片目录
    + css               css样式
    + view              html模板目录 
    + index.js          应用主文件
+ test                  测试文件目录     
+ package.json          npm配置文件
+ webpack.config.js     webpack配置文件
+ karma.config.js       karma测试工具配置文件
+ gulpfile.js           gulp配置文件
+ .babelrc              babel配置文件
+ .editorconfig         编辑器格式配置文件
+ .eslintrc             js代码检验工具
+ .eslintignore         eslint不需要检验的目录
+ .gitignore            git排除的目录  

 

### 自动化单元测试karmaa+jasmine

* 安装karma:
`npm install -g karma --save-dev`

* 安装mocha、chai和chrome的plugins:
`npm install -g karma-mocha karma-chai chai mocha karma-chrome-launcher --save-dev`

* 生成karmaa配置文件
`karma init karma.config.js`

* 运行测试karmaa
`karma start karma.config.js`
