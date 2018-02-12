'use strict';
const summ = (accumulator, currentValue) => {
    if(accumulator.length === 0){
    return 0;
    }
   return accumulator + currentValue;
}


const minn = ( array ) => {
    if(array === undefined || array.length == 0){
      return undefined;
    }
   return Math.min.apply( Math, array );
};

const isSorted = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] > arr[arr.length-1]) {
      if (arr[i] < arr[i + 1]) {
        return false;
      }
    }
  }
  return true;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] < arr[arr.length-1]) {
      if (arr[i] > arr[i + 1]){
        return false;
      }
    }
  }
}
  
  


module.exports = {};
module.exports.summ = summ;
module.exports.minn = minn;
module.exports.isSorted = isSorted;