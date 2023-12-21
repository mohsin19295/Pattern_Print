 /*
Given a number N, print the alphabet character 'W' like below:

*     *     *  
*    * *    *  
*   *   *   *  
*  *     *  *  
* *       * *  
**         **  
*           * 

NOTE: N should be >= 4
*/

const printW = (n) => {
    let [px, py] = [n, n]
    for (let i = 1; i <= n; i++) {
        let res = ''
        for (let j = 1; j <= 2 * n + 1; j++) {
            if (j === 1 || j === 2 * n-1 || j === px || j === py) {
                res += '*'
            } else {
                res += ' '
            }
        }
        px--
        py++
        console.log(res)
    }
}
printW(7)