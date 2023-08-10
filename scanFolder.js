const fs = require('fs');
const path = require('path');
const hasES6Syntax = require('./scanCode');

// 扫描文件夹中的所有 JavaScript 文件并检查是否包含 ES6 语法
function scanFolderForES6Syntax(folderPath) {
    const files = fs.readdirSync(folderPath, 'utf-8');

    for (const file of files) {
        const filePath = path.join(folderPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            // 递归扫描子文件夹
            scanFolderForES6Syntax(filePath);
        } else if (stats.isFile() && file.endsWith('.js')) {
            try {
                // 读代码
                const code = fs.readFileSync(filePath, 'utf-8');
                // 扫描单文件代码
                const hasES6 = hasES6Syntax(code);
                if (hasES6) {
                    console.log(`文件 ${filePath} 中包含 ES6 语法`);
                } else {
                    console.log(`文件 ${filePath} 不包含 ES6 语法`);
                }
            } catch (error) {
                console.error(`读取文件 ${filePath} 失败：${error}`);
            }
        }
    }
}

module.exports = scanFolderForES6Syntax;
