/*
Given a number N, print the alphabet character 'A' like below:

    *     
   * *    
  *   *   
 *******  
*       * 

NOTE: N should be >= 4
*/

const printA = (n) => {
  for (let i = 1; i <= n; i++) {
    let res = '';
    for (let j = 1; j <= n * 2; j++) {
      if (
        j === n - i + 1 ||
        j === n + i - 1 ||
        (i === Math.ceil(n / 2) + 1 && j > n - i && j < n + i)
      ) {
        res += '*';
      } else {
        res += ' ';
      }
    }
    console.log(res);
  }
};

printA(5);
