class TimeLimitedCache {
  constructor() {
    this.cacheValues = new Map();
    this.timeouts = new Map();
  }
  /**
   * @param {number} key
   * @param {number} value
   * @param {number} duration time until expiration in ms
   * @return {boolean} if un-expired key already existed
   */
  set(key, value, duration) {
    const exists = this.cacheValues.has(key);

    this.cacheValues.set(key, { value: value, expired: false });

    if (this.timeouts.has(key)) {
      clearTimeout(this.timeouts.get(key));
    }

    const timeoutId = setTimeout(() => {
      this.cacheValues.delete(key);
      this.timeouts.delete(key);
    }, duration);

    this.timeouts.set(key, timeoutId);

    return exists;
  }
  /**
   * @param {number} key
   * @return {number} value associated with key
   */
  get(key) {
    return this.cacheValues.has(key) ? this.cacheValues.get(key) : -1;
  }
  /**
   * @return {number} count of non-expired keys
   */
  count() {
    return this.cacheValues.size();
  }
}


/* Test */
const timeLimitedCache = new TimeLimitedCache();
const hoal = timeLimitedCache.set(1, 42, 1000);
console.log(hoal);
const x = timeLimitedCache.get(1);
console.log(x);
const y = timeLimitedCache.count();
console.log(y);

// ------------- //

/*
TimeLimitedCache.prototype.set = function (key, value, duration) {
  let exists = false;
  if (this.cacheValues.has(key) && this.cacheValues.get(key).expired === false)
    exists = true;

  this.cacheValues.set(key, { value: value, expired: false });

  if (this.timeouts.has(key)) {
    clearTimeout(this.timeouts.get(key));
  }
  const timeoutId = setTimeout(() => {
    this.cacheValues.set(key, { value: value, expired: true });
    this.timeouts.delete(key);
  }, duration);

  this.timeouts.set(key, timeoutId);

  return exists;
};

TimeLimitedCache.prototype.get = function (key) {
  return this.cacheValues.has(key) &&
    this.cacheValues.get(key).expired === false
    ? this.cacheValues.get(key).value
    : -1;
};

TimeLimitedCache.prototype.count = function () {
  let nonExpired = 0;
  for (const value of this.cacheValues.values()) {
    if (!value.expired) nonExpired++;
  }
  return nonExpired;
}; */
