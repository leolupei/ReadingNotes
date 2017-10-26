### 致谢 ###
> * John Resig: 1984年  jquery, secrets of the Javascript Ninja 作者
> * Jereny Ashkenas: CoffeeScript 作者
> * Ryan Dahl: nodejs 作者
> * Brendan Eich: javascript 之父， MDN 负责人。

### 前言 ###
> * javascript是可以事件模型处理异步任务的单线程语言
> * 单线程语言编写面向事件要简单很多，不需要用互斥体、信号量
> * 但当事件增多时，传统的js回调代码结构太复杂，"金字塔厄运"
> * REPL: Read-Eval-Print Loop , 类似 console命令行
> * 当且仅当调用链中的两个函数调用返回同一个对象时，才会使用相同的缩进。

###  第一章 深入理解 javascript事件 ###
#### 1.1.1 现在还是将来运行 ####
> * let的变量除了作用域是在for区块中，而且会为每次循环执行建立新的词法环境(LexicalEnvironment),拷贝所有的变量名称与值到下一个循环执行。([参见案例](codes/chapter01/letAndVar.js))
> * [let不存在变量提升](http://www.szbelle.com/article/3615.html)
> * 经验总结：如果想避免callback受到这样的闭包影响，
> * 1. 要么用let，这样回调函数会从block语法环境中获取变量值
> * 2. 要么创建一个函数，将闭包的变量作为参数，这样在执行函数的时候就会将变量的及时值传递到函数内侧，回调函数将从创建的函数闭包中获取变量值

```
 function letFuncTrans2Var() {
    var _loop = function(i) {
        setTimeout(() => console.log("i:" + i), 0);
    }
    for (var i = 0; i < 10; i++) {
        _loop(i);
    }
}

/*
    1. 这是E5模拟ES6 let 的实现
    2. 核心就是将 从letFuncTrans2Var闭包取 i，转化为从_loop 闭包中取 i, i 作为 _loop 的参数
*/
```