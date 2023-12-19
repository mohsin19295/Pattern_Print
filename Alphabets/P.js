 /*
Given a number N, print the alphabet character 'P' like below:

* * * *   
*       * 
* * * *   
*         
*  

NOTE: N should be >= 5
*/

const printP = (n) => {
    for (let i = 1; i <= n; i++) {
        let res = ''
        for (let j = 1; j <= n; j++) {
            if (j === 1 || (i === 1 && j !== n) || (j === n && i !==1 && i < Math.ceil(n / 2)) || (i === Math.ceil(n / 2) && j !==n)) {
                res += '* '
            } else {
                res += '  '
            }
        }
        console.log(res)
    }
}
printP(5)