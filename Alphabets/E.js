/*
Given an odd number N, print the alphabet character 'E' like below:

*****
*    
*****
*    
*****

NOTE: N should be >= 5
*/

const printE = (n) => {
    for (let i = 1; i <= n; i++){
        let res = ''
        for (let j = 1; j <= n; j++){
            if (j === 1 || i === 1 || i === n || i === Math.ceil(n / 2)) {
                res+='*'
            } else {
                res+=' '
            }
        }
        console.log(res)
    }
}
printE(5)