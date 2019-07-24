#!/usr/bin/env node

/**
 * @description Given an array of integers, return indices of the two numbers
 *  such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may not
 * use the same element twice.
 *
 * @param {number[]} theArray An array of integers
 *
 * @param {number[]} target  The target of the sum
 *
 * @returns {number[]} The array that values sum up to the target
 *
 */

(function startProcess() {
  function findElementsWithoutPair(theArray) {
    const cache = {};
    const thePair = [];
    for (let index = 0; index < theArray.length; index += 1) {
      if (cache[theArray[index]]) {
        cache[theArray[index]] += 1;
      }
      if (!cache[theArray[index]]) {
        cache[theArray[index]] = 1;
      }
    }
    for (let index = 0; index < theArray.length; index += 1) {
      const element = theArray[index];
      if (cache[element] < 2) {
        thePair.push(element);
      }
      if (thePair.length === 2) {
        index = theArray.length;
      }
    }
    return thePair;
  }

  console.log(findElementsWithoutPair([5, 23, 23, 66, 5, 23, 7, 0]));
  // should return [0, 1]
})();
