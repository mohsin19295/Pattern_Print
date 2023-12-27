/*
Given an odd number N, print the pattern like below:

A        
BB       
CCC      
DDDD     
EEEEE    
DDDD     
CCC      
BB       
A 

*/

const printCharPattern = (n) => {
    for (let i = 1; i <= n; i++) {
        let res = ''
        for (let j = 1; j <= n; j++) {
            if ((j <= i && i <= Math.ceil(n / 2))) {
                res += String.fromCharCode(i + 64)
            } else if ((i >= Math.ceil(n / 2) && j <= n - i + 1)) {
                res += String.fromCharCode( n - i + 1 + 64)
            } else {
                res += ' '
            }
        }
        console.log(res)
    }
}

printCharPattern(9)