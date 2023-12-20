 /*
Given a number N, print the alphabet character 'U' like below:

*       * 
*       * 
*       * 
*       * 
  * * * 

NOTE: N should be >= 4
*/

function printU(n) {
    for (let i = 1; i <= n; i++) {
        let res = ''
        for (let j = 1; j <= n; j++) {
            if ((j === 1 && i !== n) || (j === n && i !== n) || (i === n && j !== 1 && j !== n)) {
                res += '* '
            } else {
                res += '  '
            }
        }
        console.log(res)
    }
}
printU(5)