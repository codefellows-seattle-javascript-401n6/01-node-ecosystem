# Modules

## greet.js
### The greet function consists of one function, ```greet()```: 
```
function greet (str) {
    let input = str;
      if(typeof input != 'string'){
        return null;
    }
    return 'hello ' + input;
}
```
Takes in the paramater of str (string), and returns the concatenated string "hello + str". If the function is empty, greet will return null.


## artithmetic.js
### The arithmetic.js consists of two functions. ```add()```, and ```sub()```:
```
function add(num1, num2) {
    if(typeof num1 != 'number' || typeof num2 != 'number'){
      return null;
    }
    return num1 + num2;
  }

function sub(num1, num2) {
    if(typeof num1 != 'number' || typeof num2 != 'number'){
      return null;
    }
    return num2 - num1;
  }
```
-The add function will take in two paramaters(```num1, num2```)and return the sum of the paramaters. If will return null if one or both of the parameters are not numbers.<br>
-The sub function will do the same except it will subrtact numbers. 

## array-util.js
### array-util.js consists of three functions. ```summ()``` ```minn()``` ```isSorted```: 

```
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
  if (arr[0] > arr[arr.length-1]) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {

      }
       return false;
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
```
-```sum()``` will accept an array and return the total of all elements. It will return 0 if the array is empty.
-```minn()``` will accept an array and return the smallest value from that array. It will return undefined if the array is empty;
-```isSorted()```will return true if the elements in the array are in ascending order. It will also return true if the array is empty. It will return false if the array is unsorted. 