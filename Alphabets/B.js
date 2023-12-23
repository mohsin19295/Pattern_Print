/*
Given an odd number N, print the alphabet character 'B' like below:

* * * * * *   
*           * 
*           * 
* * * * * *   
*           * 
*           * 
* * * * * *   

NOTE: N should be >= 5
*/

const printB = (n) => {
    for (let i = 1; i <= n; i++) {
        let res = ''
        for (let j = 1; j <= n; j++) {
            if (j === 1 || (i === 1 && j !== n) || (j === n && i !== 1 && i !== Math.ceil(n / 2) && i !==n) || (i === Math.ceil(n / 2) && j !== n) || i === n && j !==n) {
                res += '* '
            } else {
                res += '  '
            }
        }
        console.log(res)
    }
}
printB(7)