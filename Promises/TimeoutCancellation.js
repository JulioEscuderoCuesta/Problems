/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    const timeoutId = setTimeout(() => {
            fn(...args);
    }, t);

    const cancelFn = () => {
        clearTimeout(timeoutId);
    };

    return cancelFn;
}

// Mock function
function sayHi(nombre) {
    console.log("¡Hola " + nombre + "!");
}

// After 2 seconds, it will print out "Julio"
const cancel = cancellable(sayHi, ["Julio"], 2000);

// Now let's try it again but cancelling it.
const cancel2 = cancellable(sayHi, ["Robert"], 2000);
setTimeout(() => {
    cancel2();
}, 1000);

// The second cancellable gets cancelled because I called it with 1 second delay
