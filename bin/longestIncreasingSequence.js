#!/usr/bin/env node
// A2. Longest Increasing Sequence.

/**
 * @description Finds the longest increasing sequence from a given array of
 *  integers.
 * - A "sequence" is defined as 2 or more neighboring array elements.
 * - A sequence is "increasing" when each value in the sequence is followed
 *   by a value that is greater than the previous value.
 * - An array can have multiple increasing sequences.
 * - An "increasing sequence" ends when either:
 *   - the next value is lesser than or equal to the value before it.
 *   - there is no next value (end of array).
 * - If there are multiple sequences of the same length: return the first one.
 * - If no increasing sequence is found: return an empty array.
 * - If the function argument is invalid (not an array of integers), return an empty array.
 * - Do not mutate the argument to the function.
 *
 * @param {number[]} arr  An array of integers
 *
 * @returns {number[]} The longest increasing sequence of `arr`
 *
 * @examples
 *  longestIncreasingSequence([1]);
 *  // returns []
 *  longestIncreasingSequence([1, 1]);
 *  // returns []
 *  longestIncreasingSequence([3, 4, 1, 2]);
 *  // returns [3, 4]
 *  longestIncreasingSequence([3, 0, 2, 2, 5, -43, -1, 0, 11, 9, 10]);
 *  // returns [-43, -1, 0, 11]
 *
 */

(function startProcess() {
  function longestIncreasingSequence(theArray) {
    if (theArray.length < 2) {
      return [];
    }
    const temporalCache = {};
    let longestIndex = 0;
    theArray.forEach((element, outerIndex) => {
      temporalCache[outerIndex] = [theArray[outerIndex]];
      for (
        let internalIndex = outerIndex + 1;
        internalIndex < theArray.length;
        internalIndex += 1
      ) {
        if (
          theArray[outerIndex] < theArray[internalIndex] &&
          theArray[internalIndex - 1] < theArray[internalIndex]
        ) {
          temporalCache[outerIndex].push(theArray[internalIndex]);
          if (
            temporalCache[longestIndex].length <
            temporalCache[outerIndex].length
          ) {
            longestIndex = outerIndex;
          }
        } else {
          internalIndex = theArray.length;
        }
      }
    });
    return temporalCache[longestIndex];
  }

  console.log(longestIncreasingSequence([1]));
  // should return []
  console.log(longestIncreasingSequence([1, 1]));
  // should return []
  console.log(longestIncreasingSequence([3, 4, 1, 2]));
  // should return [3, 4]
  console.log(
    longestIncreasingSequence([3, 0, 2, 2, 5, -43, -1, 0, 11, 9, 10])
  );
  // should return [-43, -1, 0, 11]
})();
