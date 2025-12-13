// Given an array arr and a chunk size size, return a chunked array.
// A chunked array contains the original elements in arr, but consists of subarrays each of length size. 
// The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
// Please solve it without using lodash's _.chunk function.

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let result = []
    let subarray = []
    for (let i = 0; i < arr.length; i++) {
        subarray.push(arr[i]);
        if (subarray.length >= size) {
            result.push(subarray)
            subarray = []
        }
    }

    if (subarray.length > 0)
        result.push(subarray);

    return result;
}

var chunk2 = function(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

//let result = chunk([1,2,3,4,5], 1);
let result2 = chunk2([1,9,6,3,2], 3);
console.log(result2);