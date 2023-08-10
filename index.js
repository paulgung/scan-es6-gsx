#!/usr/bin/env node
// 引入内置的 `process` 模块
const process = require('process');
const path = require('path');

// 获取命令行参数
const args = process.argv.slice(2);
const cwd = process.cwd();
// 引入主方法
const scanFolderForES6Syntax = require('./scanFolder');

// 读取命令行的指定path路径
// 示例用法: node index.js 或者 node index.js dist 或者 node index.js --path=dist
let folderPath = args[0] ? path.join(cwd, args[0]) : path.join(cwd, './dist');
args.forEach(arg => {
    if (arg.startsWith('--path=')) {
        folderPath = path.join(__dirname, arg.substring(7));
    }
});

scanFolderForES6Syntax(folderPath);
