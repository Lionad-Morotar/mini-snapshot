# 快照压缩

使用前请确保已经安装了 [NodeJS](https://nodejs.org/en/) 环境。

## 如何测试

* npm install
* npm run test

测试结果：

```
[001] reduced to:  47.34% # 测试文件 [001]
[002] reduced to:  59.84% # 测试文件 [002]
[003] reduced to:  51.81% # 压缩直接用浏览器保存的 HTML 文件，效果约为 50%
[004] reduced to:  92.66% # 压缩使用 SingleFile 插件保存的 HTML 文件，效果不大
```

压缩效果 ≈ 50%，预计后续还能有 5%~10% 的上升空间，但是投入产出比较小。

## 如何使用

参考 index.test.js 文件