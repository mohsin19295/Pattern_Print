/*
Given a number N, print the alphabet character 'I' like below:

  *  
  *  
  *  
  *  
  *  

NOTE: N should be >= 3
*/

const printI = (n) => {
    for (let i = 1; i <= n; i++) {
        let res = ''
        for (let j = 1; j <= n; j++) {
            if (j === Math.ceil(n / 2)) {
                res += '*'
            } else {
                res += ' '
            }
        }
        console.log(res)
    }
}
printI(5)