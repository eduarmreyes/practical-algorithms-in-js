#!/usr/bin/env node
/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/**
 * @description Calculates the character frequencies in a string.
 * - Only count English alphabetical characters (a..z).
 * - Ignore numbers, whitespace, and punctuation.
 * - Character count is case-insensitive ('A' and 'a' count toward the same character).
 *
 * @param {string} sentence  The string whose characters will be counted
 *
 * @returns {object} An object with keys being lowercase characters, and
 *                   values being the character counts.
 * @example
 *  charFrequency('Ceres123');
 *  // returns { c: 1, e: 2, r: 1, s: 1 }
 */

(function startProcess() {
  function charFrequency(sentence) {
    const arrayOfChars = sentence.split("");
    const objectWithChars = {};
    arrayOfChars.filter(value => {
      if (/[a-zA-Z]/.test(value)) {
        const lowerCaseValue = value.toLowerCase();
        Object.prototype.hasOwnProperty.call(objectWithChars, lowerCaseValue)
          ? (objectWithChars[lowerCaseValue] += 1)
          : (objectWithChars[lowerCaseValue] = 1);
        return lowerCaseValue;
      }
    });
    return objectWithChars;
  }
  console.log(charFrequency("Ceres123"));
})();
