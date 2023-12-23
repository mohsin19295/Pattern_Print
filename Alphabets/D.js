/*
Given a number N, print the alphabet character 'D' like below:

* * * *   
*       * 
*       * 
*       * 
* * * *  

NOTE: N should be >= 4
*/

const printD = (n) => {
    for (let i = 1; i <= n; i++){
        let res = ''
        for (let j = 1; j <= n; j++){
            if (j === 1 || (j === n && i !== 1 && i !== n) || (i === 1 && j !== n) || (i === n && j !== n)) {
                res+='* '
            } else {
                res+='  '
            }
        }
        console.log(res)
    }
}
printD(5)