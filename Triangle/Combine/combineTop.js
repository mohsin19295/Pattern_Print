/*
Given a Number N, print the pattern like below:

*          *
**        **
* *      * *
*  *    *  *
*   *  *   *
************

NOTE: N should be >= 4
*/

const combineTop = (n) => {
    for (let i = 1; i <= n; i++) {
        let res = ''
        for (let j = 1; j <= 2 * n; j++) {
            if (i === n || j === 1 || j === 2 * n || j === i || j === 2 * n - i + 1) {
                res += '*'
            } else {
                res += ' '
            }
        }
        console.log(res)
    }
}
 combineTop(5)