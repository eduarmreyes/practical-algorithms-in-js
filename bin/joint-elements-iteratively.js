#!/usr/bin/env node
// Task: rewrite this function so that it uses a loop rather than recursion

(function startProcess() {
  function joinElements(theArray, joinString) {
    return theArray.reduce((previousValue, currentValue) => {
      return previousValue + joinString + currentValue;
    });
  }

  console.log(joinElements(["s", "cr", "t cod", " :) :)"], "e"));
})();
