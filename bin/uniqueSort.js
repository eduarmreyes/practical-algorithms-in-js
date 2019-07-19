#!/usr/bin/env node
// const arrayExample = [4, 2, 2, 3, 2, 2, 2];
const arrayExample = [1, 5, 2, 1];
// eslint-disable-next-line no-extend-native
Array.prototype.uniqSort = function uniqSortFn() {
  const cache = [];
  let count = 0;
  const arraySorted = this.sort((a, b) => a - b);
  arraySorted.forEach(element => {
    if (cache[count] !== element) {
      cache.push(element);
      count += count;
    }
  });
  return cache;
};

(function startProcess() {
  console.log(arrayExample.uniqSort());
})();
