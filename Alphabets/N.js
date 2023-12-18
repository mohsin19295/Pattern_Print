 /*
Given a number N, print the alphabet character 'N' like below:

*       * 
* *     * 
*   *   * 
*     * * 
*       *  

NOTE: N should be >= 4
*/

const printN = (n) => {
    for (let i = 1; i <= n; i++){
        let res = ''
        for (let j = 1; j <= n; j++){
            if (j === 1 || j === n || j === i) {
                res+="* "
            } else {
                res+='  '
            }
        }
        console.log(res)
    }
}

printN(4)