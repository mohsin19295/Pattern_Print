/*
Given a number N, print the alphabet character 'K' like below:

*    * 
*   *  
*  *   
* *    
*  *   
*   *  
*    * 

NOTE: N should be >= 5
*/

const printK = (n) => {
    let px = n;
    let py = 1;
    for (let i = 1; i <= n; i++) {
        let res = ''
        for (let j = 1; j <= n; j++) {
            if (j === 1 || (j === px - 1 && i <= Math.ceil(n / 2)) || j === py -1 && i > Math.ceil(n / 2)) {
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
printK(7)