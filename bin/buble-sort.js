#!/usr/bin/env node
// Task 1: implement bubleSort

(function startProcess() {
  const bubleSort = list => {
    const tmpList = list;
    let times = 0;
    tmpList.forEach(() => {
      for (let index = 0; index < tmpList.length - 1; index += 1) {
        if (tmpList[index] > tmpList[index + 1]) {
          const smaller = tmpList[index + 1];
          const higher = tmpList[index];
          tmpList[index] = smaller;
          tmpList[index + 1] = higher;
          times += 1;
        }
      }
    });
    console.log("Times looping and going into the if:", times);
    return tmpList;
  };
  console.log(
    "I could not find a way to avoid this algorith to be quadratic (two loops)",
    bubleSort([38, 27, 43, 3, 9, 82, 10])
  );
})();
