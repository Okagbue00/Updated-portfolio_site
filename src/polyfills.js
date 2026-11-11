// Small polyfills for older iPhone/iPad Safari (iOS 17.3 and earlier).
// react-pdf calls Promise.withResolvers (Safari 17.4+), which crashed the Resume window.
// Must be imported first in main.jsx, before any other code runs.

if (typeof Promise.withResolvers !== 'function') {
    Promise.withResolvers = function withResolvers() {
        let resolve, reject;
        const promise = new this((res, rej) => {
            resolve = res;
            reject = rej;
        });
        return { promise, resolve, reject };
    };
}

if (typeof Promise.try !== 'function') {
    Promise.try = function tryFn(fn, ...args) {
        return new this((resolve) => resolve(fn(...args)));
    };
}
