function MyPromise(func) {
  if (typeof func != "function") return null;

  var self = this;
  var count = 0;
  this.cbklist = [];
  this.then = function(callback) {
    this.cbklist.push(callback);
    return this;
  };

  this.success = function() {
    if (count == self.cbklist.length) return;
    self.cbklist[count++](self.success);
  };
  setTimeout(function() {
    func(self.success);
  }, 10);
}

