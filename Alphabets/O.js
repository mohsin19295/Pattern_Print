 /*
Given a number N, print the alphabet character 'O' like below:

  * * *   
*       * 
*       * 
*       * 
  * * * 

NOTE: N should be >= 4
*/

const printO = (n) => {
    for (let i = 1; i <= n; i++) {
        let res = ''
        for (let j = 1; j <= n; j++) {
            if ((i === 1 && j !== 1 && j !== n) || (i === n && j !== 1 && j !== n) || (j === 1 && i !== 1 && i !== n) || (j === n && i !== 1 && i !== n)) {
                res += '* '
            } else {
                res += '  '
            }
        }
        console.log(res)
    }
}
printO(5)