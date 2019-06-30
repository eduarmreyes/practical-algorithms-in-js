#!/usr/bin/env node
const times10 = n => n * 10;

(function startProcess() {
  const memoize = cb => {
    const cache = {};
    return n => {
      if (!cache[n]) {
        cache[n] = cb(n);
      }
      return cache[n];
    };
  };

  const memoizedTimes10 = memoize(times10);

  try {
    console.log("Task 4 calculated value:", memoizedTimes10(9));
    console.log("Task 4 cached value:", memoizedTimes10(9));
  } catch (error) {
    console.error("Task 4:", error);
  }
})();
