 /*
Given a number N, print the alphabet character 'G' like below:

  * * * * *   
*             
*             
*     * * * * 
*           * 
*           * 
  * * * * * * 

NOTE: N should be >= 5
*/

const printO = (n) => {
    for (let i = 1; i <= n; i++) {
        let res = ''
        for (let j = 1; j <= n; j++) {
            if ((i === 1 && j !== 1 && j !== n) || (i === n && j !== 1 && j !== n) || (j === 1 && i !== 1 && i !== n) || (j === n && i >= Math.ceil(n/2))|| (i === Math.ceil(n/2) && j >= Math.ceil(n/2))) {
                res += '* '
            } else {
                res += '  '
            }
        }
        console.log(res)
    }
}
printO(7)