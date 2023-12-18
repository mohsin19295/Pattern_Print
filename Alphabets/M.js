 /*
Given an odd number N, print the alphabet character 'M' like below:

*       * 
* *   * * 
*   *   * 
*       * 
*       * 

NOTE: N should be >= 5
*/


const printM = (n) => {
    let [px, py] = [1, n]
    for (let i = 1; i <= n; i++) {
        let res = ''
        for (let j = 1; j <= n; j++) {
            if (j === 1 || j === n || (j === px && i <= Math.ceil(n / 2))
                || (j === py && i <= Math.ceil(n / 2))) {
                res += '* '
            } else {
                res += '  '
            }
        }
        px++
        py--
        console.log(res)
    }
}

printM(5)