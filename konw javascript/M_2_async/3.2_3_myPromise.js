// - ------ 1. promise demo -------

// (function() {
//   function func1(resolve, reject) {
//     setTimeout(function() {
//       console.log("step 1...");
//       resolve("1");
//     }, 500);
//   }

//   function func2(resolve, reject) {
//     setTimeout(function() {
//       console.log("step 2...");
//       resolve("2");
//     }, 100);
//   }

//   new Promise(func1)
//     .then(d => {
//       console.log("value is " + d);
//       return new Promise(func2);
//     })
//     .then(d => {
//       console.log("value is " + d);
//       return 3;
//     })
//     .then(d => console.log(d));
// }); //();

// - ------- 2. 构建 ----------
var id = 0;

function myPromise(fn) {
  let prom = this,
    status = {
      pending: 0,
      fullfillid: 1,
      rejected: 2
    };
  this._resolves = []; // - 方法链是跟着对象走的
  this._status = status.pending;
  this._params = null;
  this.id = id++;

  this.then = function(onFullfilled) {
    return new myPromise(function(resolve) {
      function handle() {
        let ret =
          (typeof onFullfilled == "function" && onFullfilled(...arguments)) ||
          Array.from(arguments);
        // resolve(ret);
        if (ret && typeof ret["then"] == "function") {
          ret.then(function() {
            resolve(...arguments);
          });
        } else resolve(ret);
      }
      if (prom._status == status.pending) {
        prom._resolves.push(handle);
      } else {
        handle(...prom._params);
      }
    });
  };

  // - 在客户端被调用的情况不确定
  // - 和then方法内的参数(function类型)绑定
  function resolve() {
    prom._params = Array.from(arguments);
    prom._status = status.fullfillid;

    prom._resolves.forEach(f => f(...arguments));
  }

  setTimeout(function() {
    fn.call(prom, resolve);
  }, 0);
}

// - ---- 客户端调用

document.getElementById("btn1").addEventListener("click", function() {
  var p = new myPromise(function(resolve) {
    setTimeout(function() {
      resolve(1);
    }, 300);
  })
    .then(d => console.log("async: " + d))
    .then(d => {
      return new myPromise(function(resolve) {
        setTimeout(function() {
          resolve(2);
        }, 1000);
      });
    })
    .then(d => console.log("async 2: " + d));
});

// setTimeout(() => {
//   p.then(d => console.log("async3: " + d));
// }, 400);

//var pSync = new myPromise((resolve)=>resolve()).then(()=>console.log('sync'))
