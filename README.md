# SCAN ES6 CODE

### 概述

本插件用于检查给定的 JavaScript 代码是否包含 ES6 特性，使用了 `esprima` 和 `estraverse` 库来解析和遍历代码的语法树，并针对不同的节点类型来判断是否存在 ES6 特性。

### 安装依赖

在使用之前，需要安装相关依赖（请提前安装node环境），主要用到了 `esprima` 和 `estraverse` 库。可以使用以下命令进行安装：

```sh
npm install
# 或
yarn install
```

### 使用方法

运行命令：

```sh
gsx
# 或者
gsx dist # dist 是你的指定扫描目录
# 或者
gsx --path=dist # dist 是你的指定扫描目录
```

本插件的主要方法是scanCode.js，主要做了以下的es6特性的检查：

- 检查常量声明（const）
- 检查块级作用域变量声明（let）
- 检查箭头函数
- 检查模板字面量
- 解构赋值（数组和对象）
- 函数默认参数
- 展开语法（Spread）
- 迭代器（Iterator）
- Promise 对象
- 类定义（ClassDeclaration）
- 模块化语法（ImportDeclaration、ExportNamedDeclaration、ExportDefaultDeclaration、ExportAllDeclaration）
- 生成器函数（Generator）
- async/await
- 可计算的属性名（Computed Property Name）
- 模块化的动态导入（Dynamic Import）
- 默认导出语法
- 可选链操作符（Optional Chaining）
- 空值合并操作符（Nullish Coalescing）
- 类的私有字段语法
- BigInt 数据类型
- 数值分隔符
- 静态类方法
- Promise.allSettled()
- 数组的 flat()、flatMap() 方法
- 字符串模板标签函数（Tagged Template Expression）
- 对象属性的简写语法
- 对象属性的计算属性名
- 剩余参数（Rest Parameters）
- 默认导出的命名空间导入
- 尾调用优化
- 数组解构赋值的默认值
- 类的静态成员
- 可迭代对象（Iterable）
- 解构赋值的嵌套结构
- 类的扩展和继承语法
- 对象字面量的简写语法
- *检查* *Set* *和* *Map* *数据结构语法*
- *检查可迭代协议（**Iterable Protocol**）*
- *检查类的私有字段（**Private Fields**）语法*
- *检查装饰器语法*