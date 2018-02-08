'use strict';

function sum(a, b, c){
    let emptyArray = [];
    emptyArray.push(a, b, c);
    currentVal = 0;

    for(let i = 0; i < emptyArray.length; i++){
      if(!emptyArray[i]){
        return 0;
      }
      else{
        currentVal += emptyArray[i];
      }
    }
    return currentVal;
  }




function min(a, b, c){
    let emptyArray = [];
    emptyArray.push(a, b, c);
    
    for(let i = 0; i < emptyArray.length; i++){
    if(!emptyArray[i]){
        return undefined;
    }else{
      return Math.min.apply( min, emptyArray );
    }
  }
}

function isSorted(a, b, c){
    let emptyArray = [];
    emptyArray.push(a, b, c);
    
    for(let i = 0; i < emptyArray.length; i++){
      if(!emptyArray[i]){
        return true;
      }else{
      return emptyArray.sort(function(a, b, c){return a-b});
      }
    }
}
