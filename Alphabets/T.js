 /*
Given a number N, print the alphabet character 'T' like below:

* * * * * 
    * 
    * 
    * 
    * 

NOTE: N should be >= 3
*/

const printT = (n) => {
    for (let i = 1; i <= n; i++){
        let res = ''
        for (let j = 1; j <= n; j++){
            if (i === 1 || j === n) {
                res+='* '
            } else {
                res+=' '
            }
        }
        console.log(res)
    }
}
printT(5)