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
  function findElementsWithoutPair(inputWords) {
    const wordsSplit = inputWords.split(" ");
    const wordsReversed = [];
    for (let index = wordsSplit.length - 1; index >= 0; index -= 1) {
      wordsReversed.push(wordsSplit[index]);
    }
    return wordsReversed;
  }

  console.log(findElementsWithoutPair("agoda best apps"));
  // should return [0, 1]
})();
