# 快照压缩

使用前请确保已经安装了 [NodeJS](https://nodejs.org/en/) 环境。

## 如何使用

参考 index.test.js 文件

```js
const minifier = require('./index.js')

const minifiedhtml = await minifier(`<body></body>`)
```

## 如何测试

* npm install
* npm run test

## 测试结果

```
# v1.2.0
# 新增：CSS 非语义化压缩
[001] dailiyun.html reduced to:  41.47%
[002] dailiyun_wap.html reduced to:  49.89%
[003] snapshot_raw.html reduced to:  40.96%
[004] snapshot_with_singlefile_plugin.html reduced to:  85.51%

# v1.1.0
# 新增：HTML 非语义化压缩
[001] dailiyun.html reduced to:  44.27%
[002] dailiyun_wap.html reduced to:  52.79%
[003] snapshot_raw.html reduced to:  44.09%
[004] snapshot_with_singlefile_plugin.html reduced to:  90.73%

# v1.0.0 
# 新增：CSS 摇树优化
[001] reduced to:  47.34%
[002] reduced to:  59.84%
[003] reduced to:  51.81% # 压缩直接用浏览器保存的 HTML 文件，效果约为 50%
[004] reduced to:  92.66% # 压缩使用 SingleFile 插件保存的 HTML 文件，效果不大
```

从测试文件来看，压缩效果在 45% 上下浮动。

## 依赖说明

- [Cheerio](https://cheerio.js.org/)，用来解析 HTML，处理 DOM 节点
- [PostCSS](https://postcss.org/api/#postcss)，用来解析 CSS，处理 CSS 节点
- [minHTML](https://github.com/kangax/html-minifier)，非语义化压缩 HTML
- [cssnano](https://cssnano.co/docs/)，非语义化压缩 CSS
