/*
Given a number N, print the Right Angle Triangle like below:

******
 *****
  ****
   ***
    **
     *

NOTE: N should be >=3

*/

const oppositeLeftAngleStar = (n) => {
  for (let i = 1; i <= n; i++) {
    let res = '';
    for (let j = 1; j <= n; j++) {
      if (j >= i) {
        res += '*';
      } else {
        res += ' ';
      }
    }
    console.log(res);
  }
};

oppositeLeftAngleStar(6);
