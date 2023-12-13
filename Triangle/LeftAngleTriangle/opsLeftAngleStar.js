/*
Given a number N, print the Opposite Right Angle Triangle like below:

******
 *****
  ****
   ***
    **
     *

NOTE: N should be >=3

*/

const opsLeftAngle = (n) => {
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

opsLeftAngle(6);

/*
Given a number N, print the Holo Opposite Right Angle Triangle like below:

******
 *   *
  *  *
   * *
    **
     *

NOTE: N should be >=4

*/

const holoOpsLeftAngle = (n) => {
  for (let i = 1; i <= n; i++) {
    let res = '';
    for (let j = 1; j <= n; j++) {
      if (i === 1 || j === n || j === i) {
        res += '*';
      } else {
        res += ' ';
      }
    }
    console.log(res);
  }
};

holoOpsLeftAngle(6);
