function* myGenerator(action) {
    var v = yield("begin" + action);
    yield("end" + v);
    yield("3 " + action);
}

myGenerator.prototype.foo = () => { console.log("f00") };

var iterator = myGenerator("steve");

for (
    var r = iterator.next();
    (!r.done && r.value);
    (r = iterator.next(r.value))
) {
    console.log(r.value);
}