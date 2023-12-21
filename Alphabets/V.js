 /*
Given a number N, print the alphabet character 'V' like below:

*       * 
 *     *  
  *   *   
   * *    
    * 

NOTE: N should be >= 3
*/

const printV = (n) => {
    let [px, py] = [1, 2 * n - 1]
    for (let i = 1; i <= n; i++) {
        let res = ''
        for (let j = 1; j <= 2 * n; j++) {
            if (j === px || j === py) {
                res += '*'
            } else {
                res += ' '
            }
        }
        px++;
        py--
        console.log(res)
    }
}
printV(5)