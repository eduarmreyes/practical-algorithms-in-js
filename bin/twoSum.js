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
  function twoSum(theArray, target) {
    const twoSumArray = [];
    for (let index = 0; index < theArray.length; index += 1) {
      if (theArray[index] < target && twoSumArray.length <= 2) {
        if ()
      }
    }
  }

  console.log(twoSum([2, 7, 11, 15], 9));
  // should return [0, 1]
})();
