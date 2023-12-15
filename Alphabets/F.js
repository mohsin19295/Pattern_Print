/*
Given a number N, print the alphabet character 'F' like below:

******
*     
******
*     
*     
* 

NOTE: N should be >= 4
*/

const printF = (n) => {
  for (let i = 1; i <= n; i++) {
    let res = '';
    for (let j = 1; j <= n; j++) {
      if (j === 1 || i === 1 || i === Math.ceil(n / 2)) {
        res += '*';
      } else {
        res += ' ';
      }
    }
    console.log(res);
  }
};
printF(6)