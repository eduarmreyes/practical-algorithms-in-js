#!/usr/bin/env node
// Task 1: implement mergeSort
// :fire: protip: Split the array into halves and merge them recursively
// :fire: protip: return once we hit an array with a single item. That is
// a sorted array of size 1
// :fire: protip: compare the arrays item by item and return the concatenated result

(function startProcess() {
  function concatTwoArrays(leftSide, rightSide) {
    const temp = [];
    let indexLeft = 0;
    let indexRight = 0;
    while (indexLeft < leftSide.length && indexRight < rightSide.length) {
      if (leftSide[indexLeft] < rightSide[indexRight]) {
        temp.push(leftSide[indexLeft]);
        indexLeft += 1;
      }
      if (rightSide[indexRight] < leftSide[indexLeft]) {
        temp.push(rightSide[indexRight]);
        indexRight += 1;
      }
    }
    return temp
      .concat(leftSide.slice(indexLeft))
      .concat(rightSide.slice(indexRight));
  }
  const mergeSort = list => {
    if (list.length === 1) {
      return list;
    }
    const middle = Math.floor(list.length / 2);
    const leftSide = list.slice(0, middle);
    const rightSide = list.slice(middle);
    return concatTwoArrays(mergeSort(leftSide), mergeSort(rightSide));
  };
  console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));
  console.log(mergeSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]));
  console.log(mergeSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  console.log(mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
})();
