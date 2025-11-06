/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = args.join(",");
        // const key = JSON.stringify(args);

        if (!(key in cache)) 
            cache[key] = fn(...args);
        return cache[key];
    }
}

const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 3));  // Output: 5
console.log(memoizedSum(23));  // Output (Cache): 5
console.log(memoizedSum(3, 2)); // Output: 5 -> but calculated again!