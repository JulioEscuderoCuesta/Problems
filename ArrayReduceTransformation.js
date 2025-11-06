/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if (nums.length == 0) return init;

    let result = init;
    for(let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }
    return result;
}

function sum(accum, curr) { return accum + curr; }

arr1 = [1,2,3,4];
arr2 = [];
console.log(reduce(arr1, sum, 0)) // Output : 10
console.log(reduce(arr1, sum, 4)) // Output : 14
console.log(reduce(arr2, sum, 90) )// Output : 90