#!/usr/bin/env node
const times10 = n => n * 10;

(function startProcess() {
  const memoizedClosureTimes10 = () => {
    const cache = {};
    return n => {
      if (!cache[n]) {
        cache[n] = times10(n);
      }
      return cache[n];
    };
  };

  const memoClosureTimes10 = memoizedClosureTimes10();

  try {
    console.log("Task 3 calculated value:", memoClosureTimes10(9));
    console.log("Task 3 cached value:", memoClosureTimes10(9));
  } catch (error) {
    console.error("Task 3:", error);
  }
})();
