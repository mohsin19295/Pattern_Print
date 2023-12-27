/*
Given a number N, print the pattern like below:

    **    
   *  *   
  *    *  
 *      * 
*        *
*        *
 *      * 
  *    *  
   *  *   
    **  
   
NOTE: N should >= 3
*/

const diamondPrinting = (n) => {
    for (let i = 1; i <= 2*n; i++){
        let res =''
        for (let j = 1; j <= 2*n; j++){
            if (j === n - i + 1 || j === i - n || j === n + i || j === 2 *n - i + n + 1) {
                res+='*'
            } else {
                res+=' '
            }
        }
        console.log(res)
    }
}

diamondPrinting(5)