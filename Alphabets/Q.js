 /*
Given a number N, print the alphabet character 'Q' like below:

  * * *     
*       *   
*   *   *   
*     * *   
  * * * *   
          * 

NOTE: N should be >= 5
*/

const printQ = (n) => {
    for (let i = 1; i <= n; i++) {
        let res = ''
        for (let j = 1; j <= n; j++) {
            if ((i === 1 && j !== 1 && j < n-1) || (i === n-1 && j !== 1 && j < n-1) || (j === 1 && i !== 1 && i < n-1) || (j === n-1 && i !== 1 && i < n-1) || (j === i && i >= Math.ceil(n/2))) {
                res += '* '
            } else {
                res += '  '
            }
        }
        console.log(res)
    }
}
printQ(6)