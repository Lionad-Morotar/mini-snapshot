const fs = require('fs')
const path = require('path')

const minifier = require('./index.js')

// 定义输入文件夹
const rawDir = path.join(__dirname, './unminify')

// 读取 HTML 文件，压缩，并输出
fs.readdirSync(rawDir).map((filename, idx) => {
  const isHTML = filename.endsWith('.html')

  if (isHTML) {
    const idxLable = `[${(idx + 1).toString().padStart(3, '0')}]`

    const filePath = path.join(rawDir, filename)
    const template = fs.readFileSync(filePath)

    const minhtml = minifier(template)
    console.log(`${idxLable} ${filename} reduced to: `, (minhtml.length / template.length * 100).toFixed(2) + '%')

    fs.writeFileSync(path.join(__dirname, `./minified/${filename}`), minhtml)
  }
})