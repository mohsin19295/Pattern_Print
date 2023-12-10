/*
Given a number N, print the Rectangular shape like below:

******
*    *
*    *
*    *
*    *
******

NOTE: N should be >=3
*/

const printRectangular = (n) => {
  for (let i = 1; i <= n; i++) {
    let res = '';
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        res += '*';
      } else {
        res += ' ';
      }
    }
    console.log(res);
  }
};

printRectangular(6);