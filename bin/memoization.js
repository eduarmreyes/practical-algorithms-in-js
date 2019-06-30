#!/usr/bin/env node
const times10 = n => {
  return n * 10;
};

(function startProcess() {
  console.log(times10(9));

  const cache = {};

  const memoTimes10 = n => {
    if (!cache[n]) {
      cache[n] = times10(n);
    }
    return cache[n];
  };
  console.log("Calculated value:", memoTimes10(9));
  console.log("Cached value:", memoTimes10(9));
})();
