function fn(x, counter) {
  var i = 0;
  var val2 = undefined;
  for (; i !== x; ) {
    var foo = {};
    counter.x++;
    i++;
    foo.counter = counter;
  }
  return foo.counter.x + 10;
}

global.__optimize && __optimize(fn);

inspect = function() {
  return fn(100, { x: 2 });
};
