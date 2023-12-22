 /*
Given a number N, print the alphabet character 'Z' like below:

* * * * * 
      *   
    *     
  *       
* * * * *  

NOTE: N should be >= 4
*/

const printZ = (n) => {
    for (let i = 1; i <= n; i++){
        let res = ''
        for (let j = 1; j <= n; j++){
            if (i === 1 || i === n || j === n - i + 1) {
                res+='* '
            } else {
                res+='  '
            }
        }
        console.log(res)
    }
}
printZ(5)