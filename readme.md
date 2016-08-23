### webpack+react+redux+es6  demo

```
+ src
    + action      action
    + containers  组件容器
    + components  组件
    + reduces     action处理器
    ~ index.js    应用主文件
    
```    

### 自动化单元测试karmaa+jasmine

* 安装karma:
`npm install -g karma --save-dev`

* 安装jasmine和chrome的plugins:
`npm install -g karma-jasmine karma-chrome-launcher --save-dev`

* 生成karmaa配置文件
`karma init karma.config.js`

* 运行测试karmaa
`karma start karma.config.js`