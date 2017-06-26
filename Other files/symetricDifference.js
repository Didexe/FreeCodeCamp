
function sym(...args) {
  var symetric = [];
  var current = args[0];
  var next = args[1];
  for (let i = 1; i < args.length; i += 1) {
    symetric = [];
    symetric.push(...current.filter(function(x) {
      return next.every(y => x !== y)
    }))
    symetric.push(...next.filter(function(x) {
      return current.every(y => x !== y)
    }))
  
    current = symetric;
    next = args[i+1];
  }
  console.log([...(new Set(symetric))]);
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
