// - 不立刻求职, 到需要的时候再求职
var curring = function(fn) {
    // - 传入的参数
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
        var newArgs = args.concat(Array.prototype.slice.call(arguments));
        return fn.apply(null, newArgs)
    }
}

var getName = curring(function(a, b){
    console.log(Array.prototype.join.call(arguments, '_'));
})

