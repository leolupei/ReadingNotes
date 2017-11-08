function varFunc() {
    for (var i = 0; i <= 10; i++) {
        setTimeout(() => console.log("i:" + i), 0);
    }
}

// - var 去糖写法
function varFuncMock() {
    var i;
    i = 0;
    if (i < 10) {
        setTimeout(() => console.log("i:" + i), 0);
        i++;
        if (i < 10) {
            setTimeout(() => console.log("i:" + i), 0)
            i++
        }
    }
}

// - let
function letFunc() {
    for (let i = 0; i < 10; i++) { setTimeout(() => console.log("i:" + i), 0) }
}

// - let 模拟解释
function letFuncMock() {
    {
        let i;
        for (i = 0; i < 10; i++) {
            let k = i;
            //let i = k;
            setTimeout(() => console.log("i:" + k), 0);
        }
    }
}

// - ES6 转换成 ES5 的实现
function letFuncTrans2Var() {
    // - 核心：
    // 以前：letFuncTrans2Var闭包中的 i
    // 现在：转换为_loop方法的参数 i; callback 函数访问的闭包环境是 _loop执行时的参数i的值
    var _loop = function(i) {
        setTimeout(() => console.log("i:" + i), 0);
    }
    for (var i = 0; i < 10; i++) {
        _loop(i);
    }
}

varFunc();
// varFuncMock();
// letFunc();
// letFuncMock();
// letFuncTrans2Var();