
exports.min = function min (array) {
    if (array === undefined){return 0} else if(array.length === 0){return 0}
  return array ? Math.min.apply(null,array) : 0;
}

exports.max = function max (array) {
    if (array === undefined){return 0} else if(array.length === 0){return 0}
  return array ? Math.max.apply(null,array) : 0;
}

exports.avg = function avg (array) {
    if (array === undefined){return 0} else if(array.length === 0){return 0}
  return  array ? array.reduce((a, b) => (a + b)) / array.length : 0;
}
