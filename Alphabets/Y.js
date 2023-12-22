 /*
Given an odd number N, print the alphabet character 'Y' like below:

*   *
 * * 
  *  
  *  
  *  

NOTE: N should be >= 5
*/

const printY = (n) => {
    for (let i = 1; i <= n; i++){
        let res =''
        for (let j = 1; j <= n; j++){
            if (j === i && i <= Math.ceil(n / 2) || (j === n - i + 1 && i <= Math.ceil(n / 2)) || (j === Math.ceil(n/2) && i >= Math.ceil(n/2))) {
                res+='*'
            } else {
                res+=' '
            }
        }
        console.log(res)
    }
}
printY(5)