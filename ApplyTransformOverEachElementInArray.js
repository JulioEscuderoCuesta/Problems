/**
 * My first solution
 * 
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let arrReturn = [];
    for(let i = 0; i < arr.length; i++) {
        arrReturn.push(fn(arr[i], i));
    }
    return arrReturn;
} 


/**
 * Other solution
 * 
 * Preassign the length of the new array (might be slightly better in some JS engines)
 * 
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let arrReturn = new Array(arr.length);
    for(let i = 0; i < arr.length; i++) {
        arrReturn.push(fn(arr[i], i));
    }
    return arrReturn;
} 


//function plusone(n) { return n + 1;}
//arr1 = [1,2,3];
//console.log(map(arr1, plusone));