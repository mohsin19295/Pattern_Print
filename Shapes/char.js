/*
Given an odd number N, print the pattern like below:

A      
AB     
ABC    
ABCD   
ABC    
AB     
A 

*/

const printCharPattern = (n) => {
    for (let i = 1; i <= n; i++) {
        let res = ''
        for (let j = 1; j <= n; j++) {
            if (j === 1 || (j <= i && i <= Math.ceil(n / 2)) || (i >= Math.ceil(n / 2) && j <= n - i + 1)) {
                res += String.fromCharCode(j + 64)
            } else {
                res += ' '
            }
        }
        console.log(res)
    }
}

printCharPattern(7)