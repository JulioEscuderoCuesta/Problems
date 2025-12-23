/*Given an array arr and a function fn, return a sorted array sortedArr.
You can assume fn only returns numbers and those numbers determine the sort order of sortedArr.sortedArr must be sorted in ascending order by fn output.
You may assume that fn will never duplicate numbers for a given array.*/

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

console.log(sortBy([[3, 4], [7, 5], [10, 1]], (x) => x[1]));