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
  function sortListDates(theArray) {
    return theArray.sort((a, b) => {
      const aDate = new Date(a);
      const bDate = new Date(b);
      return aDate - bDate;
    });
  }

  console.log(sortListDates(["01 Mar 2017", "03 Feb 2017", "15 Jan 1998"]));
  // should return [0, 1]
})();
