/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(resolve => {
        setTimeout(() => resolve("output: " + millis), millis);
    });
}

/**
 * Second approach
 */
async function sleep2(millis) {
    return new Promise(resolve => {
        setTimeout(resolve, millis);
    });
}