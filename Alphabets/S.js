 /*
Given an odd number N, print the alphabet character 'S' like below:

*****
*    
*****
    *
***** 

NOTE: N should be >= 5
*/

const printS = (n) => {
    for (let i = 1; i <= n; i++){
        let res = ''
        for (let j = 1; j <= n; j++){
            if (i === 1 || i === n || i === Math.ceil(n / 2) || (j === 1 && i <= Math.ceil(n / 2)) || (j === n && i >= Math.ceil(n / 2))) {
                res+='*'
            } else {
                res+=' '
            }
        }
        console.log(res)
    }
}
printS(5)