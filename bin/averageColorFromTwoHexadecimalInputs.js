#!/usr/bin/env node

/**
 * @description Write a function that takes 2 colors as arguments
 * and returns the average color
 *
 * - The parameters will be two 6-digit hexadecimal strings. This does not need to be validated.
 * - The return value should be a 6-digit hexadecimal string.
 * - The hexadecimal strings represent colors in RGB, much like in CSS.
 * - The average color is to be determined by taking the arithmetic mean for each component: red, green and blue.
 *
 * @param {string} hexadecimalOne A hexadecimal color representation
 *
 * @param {string} hexadecimalTwo A hexadecimal color representation
 *
 * @returns {string} The average color between the two color inputs
 *
 */

(function startProcess() {
  function averageColor(hexadecimalOne, hexadecimalTwo) {
    /**
     * first I am converting from hexadecimal to decimal
     * following this article from CSS-tricks
     * https://css-tricks.com/converting-color-spaces-in-javascript/#article-header-id-3
     */
    const r1 = parseInt(`${hexadecimalOne[1]}${hexadecimalOne[2]}`, 16);
    const g1 = parseInt(`${hexadecimalOne[3]}${hexadecimalOne[4]}`, 16);
    const b1 = parseInt(`${hexadecimalOne[5]}${hexadecimalOne[6]}`, 16);

    const r2 = parseInt(`${hexadecimalTwo[1]}${hexadecimalTwo[2]}`, 16);
    const g2 = parseInt(`${hexadecimalTwo[3]}${hexadecimalTwo[4]}`, 16);
    const b2 = parseInt(`${hexadecimalTwo[5]}${hexadecimalTwo[6]}`, 16);

    /**
     * I figure it would be easier to find the midpoint by using decimals
     * to do the math
     */

    const rAverage = Math.round((r1 + r2) / 2);
    const gAverage = Math.round((g1 + g2) / 2);
    const bAverage = Math.round((b1 + b2) / 2);

    /**
     * After finding the average between the two decimal colors,
     * it is just a matter of converting from decimal to hexadecimal again.
     */

    const finalRed = rAverage.toString(16);
    const finalGreen = gAverage.toString(16);
    const finalBlue = bAverage.toString(16);

    return `#${finalRed}${finalGreen}${finalBlue}`;
  }

  console.log(averageColor("#ffffff", "#000000"));
})();
