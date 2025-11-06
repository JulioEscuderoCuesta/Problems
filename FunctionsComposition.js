
/*
 * @param {Function[]} functions
 * @return {Function}
 */
/* var compose = function(functions) {
    
    return function(x) {
        if (functions.length == 0) return x;

        let result = x;
        for(let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    }
};
 */
/**
 * Other solution. Using reduceRight
 * @param {Function[]} functions
 * @return {Function}
 */
/* var compose = function(functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    }
};  */


/**
 * Other solution. Using reduceRight and arrow functions
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return x => functions.reduceRight((acc, fn) => fn(acc), x);
};

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)) // Output: 9
const fn2 = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(fn2(4)) // Output: 65