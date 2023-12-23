/*
Given a number N, print the alphabet character 'R' like below:

* * * * *     
*         *   
*         *   
* * * * *     
*   *         
*     *       
*       *  

NOTE: N should be >= 6
*/

const printR = (n) => {
    for (let i = 1; i <= n; i++) {
        let res = ''
        for (let j = 1; j <= n; j++) {
            if (j === 1 || (i === 1 && j < n - 1) || (j === n - 1 && i !== 1 && i < Math.ceil(n / 2)) || (i === Math.ceil(n / 2) && j < n - 1) || (i >= Math.ceil(n / 2) && j === i - 2)) {
                res += '* '
            } else {
                res += '  '
            }
        }
        console.log(res)
    }
}
printR(7)