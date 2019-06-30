#!/usr/bin/env node
// Task: rewrite this function so that it uses a loop rather than recursion

(function startProcess() {
  function joinElements(theArray, joinString) {
    let resultSoFar = "";

    for (let index = 0; index < theArray.length; index += 1) {
      resultSoFar += theArray[index] + joinString;
    }

    return resultSoFar;
  }

  console.log(joinElements(["s", "cr", "t cod", " :) :)"], "e"));
})();
