/*
Given a number N, print the Triangle shape like below:

        *        
       * *       
      *   *      
     *     *     
    *       *    
   *         *   
  *           *  
 *             * 
*****************

NOTE: N should be >=3
*/

const printTriangle = (n) => {
  let [px, py] = [n, n];
  for (let i = 1; i <= n; i++) {
    let res = '';
    for (let j = 1; j <= n * 2 - 1; j++) {
      if (j === px || j === py || i === n) {
        res += '*';
      } else {
        res += ' ';
      }
    }
    px++;
    py--;
    console.log(res);
  }
};

printTriangle(7);
