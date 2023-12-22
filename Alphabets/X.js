 /*
Given an odd number N, print the alphabet character 'X' like below:

*   *
 * * 
  *  
 * * 
*   *

NOTE: N should be >= 3
*/

const printX = (n) => {
    for (let i = 1; i <= n; i++) {
        let res = ''
        for (let j = 1; j <= n; j++) {
            if (j === i || j === n - i + 1) {
                res += '*'
            } else {
                res += ' '
            }
        }
        console.log(res)
    }
}
printX(5)