#!/usr/bin/env node
// Task 1: write a recursive factorial method

(function startProcess() {
  const linearSearch = (list, item) => {
    let found = -1;
    list.forEach((element, index) => {
      if (element === item) {
        found = index;
      }
      return found;
    });
    return found;
  };

  console.log(linearSearch([2, 6, 7, 90, 103], 90));
})();
