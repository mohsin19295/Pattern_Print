/*
Given a number N, print the Left Angle Triangle like below:

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

/*
Given a number N, print the Holo Left Angle Triangle like below:

     *
    **
   * *
  *  *
 *   *
******

NOTE: N should be >=4

*/

const opsLeftAngle = (n) => {
  for (let i = 1; i <= n; i++) {
    let res = '';
    for (let j = 1; j <= n; j++) {
      if (i === n || j === n || j === n - i + 1) {
        res += '*';
      } else {
        res += ' ';
      }
    }
    console.log(res);
  }
};

opsLeftAngle(6);
