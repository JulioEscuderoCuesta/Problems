/**
 * Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.
A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.
The provided callback fn will accept an item in the array and return a string key.
The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.
Please solve it without lodash's _.groupBy function.
 */

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy2 = function (fn) {
    let result = {};
    this.forEach((element, index) => {
        let key = fn(element);
        if (result.has(key)) {
            let value = result.get(key);
            value.push(this[index])
            result.set(key, value);
        } else {
            result.set(key, new Array(this[index]));
        }
    });

    return result;
};


Array.prototype.groupBy = function (fn) {
    let result = {};
    this.forEach((element) => {
        let key = fn(element);
        if (result[key]) {
            result[key].push(element);
        } else {
            result[key] = [element];
        }
    });
    return result;
};


let result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].groupBy(function (n) { return String(n > 5); }) // {"1":[1],"2":[2],"3":[3]}
console.log(result);