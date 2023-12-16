/*
Given an odd number N, print the alphabet character 'H' like below:

*     *
*     *
*     *
*******
*     *
*     *
*     *

NOTE: N should be >= 3
*/

const printH = (n) => {
    for (let i = 1; i <= n; i++) {
        let res = ''
        for (let j = 1; j <= n; j++) {
            if (j === 1 || j === n || i === Math.ceil(n / 2)) {
                res += '*'
            } else {
                res += ' '
            }
        }
        console.log(res)
    }
}

printH(5)