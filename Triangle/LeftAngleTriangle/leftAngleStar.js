/*
Given a number N, print the Right Angle Triangle like below:

     *
    **
   ***
  ****
 *****
******

NOTE: N should be >=3

*/

const leftAngleStar = (n) => {
  for (let i = 1; i <= n; i++) {
    let res = '';
    for (let j = n; j >= 1; j--) {
      if (j <= i) {
        res += '*';
      } else {
        res += ' ';
      }
    }
    console.log(res);
  }
};

leftAngleStar(6);
