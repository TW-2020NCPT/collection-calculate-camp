'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  for (var i = 0, len = collection.length, evenArr = []; i < len; i ++) {
    if (collection[i] % 2 === 0) {
      evenArr.push(collection[i]);
    }
  }
  return evenArr;
}

module.exports = collect_all_even;
