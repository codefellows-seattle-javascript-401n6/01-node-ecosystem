'use strict';

let ArrayUtil = {};

ArrayUtil.sum = function(array) {
  if (array.length === 0) {
    return 0;
  } else {
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.reduce(reducer);
  }
}

ArrayUtil.min = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  let smallest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  return smallest;
}

ArrayUtil.isSorted = function(array) {
  let isItSorted;
  if (array[0] < array[array.length-1]) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        return false;
      }
    }
  }
  if (array[0] > array[array.length-1]) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < array[i + 1]) {
        return false;
      }
    }
  }
  return true;
}

module.exports = ArrayUtil;