chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(candy, bars){
  bars = [bars, ...candy];
  return bars
}

function destructivelyAddElementToBeginningOfArray(candyString, candy){
  candyString.unshift(candy)
  return candyString
}



function addElementToEndOfArray(array, element){
  array = [...array, element];
  return array;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array
}

function accessElementInArray(array,one){
  return (array[1]);
  
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array){
 array.slice(0,1);
 return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  array.slice(-1)
  return array
}