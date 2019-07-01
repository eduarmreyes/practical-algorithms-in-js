#!/usr/bin/env node
// Task 1: write a recursive factorial method

(function startProcess() {
  const memoize = cb => {
    const cache = {};
    return number => {
      if (!cache[number]) {
        cache[number] = cb(number);
      }
      return cache[number];
    };
  };
  function factorial(factorNumber) {
    let result = 1;
    for (let index = 1; index <= factorNumber; index += 1) {
      result *= index;
    }
    return result;
  }
  const myFactorial = memoize(factorial);
  console.log(myFactorial(5));
  console.log("Cached:", myFactorial(5));
})();
