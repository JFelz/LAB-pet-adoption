
let y = 2;
let b = 6;
let toM = 5;
let gaR = 10;

let arr = [];

arr.push(y, b, toM, gaR);


function returnLast(arr) {
  // return the last item of the array
  for (i = 0; i < arr.length; i++){
 if (i >= arr.length){
  return arr.pop();
 }
}
}
