/*
Given a Number N, print the pattern like below:

**********
*  *  *  *
* *    * *
**      **
*        *

NOTE: N should be >= 4
*/

const combineBottom = (n) => {
    let [px, py] = [n+1, n]
    for (let i = 1; i <= n; i++){
        let res = ''
        for (let j = 1; j <= 2*n; j++){
            if (i === 1 || j === 1 || j === 2 * n || j === px || j === py) {
                res+='*'
            } else {
                res+=' '
            }
        }
        px++;
        py--;
        console.log(res)
    }
}

combineBottom(5)