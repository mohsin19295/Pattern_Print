/*
Given a number N, print the Right Angle Triangle like below:

*
**
***
****
*****
******

NOTE: N should be >=3

*/

const rightAngleStar = (n) => {
  for (let i = 1; i <= n; i++) {
    let res = '';
    for (let j = 1; j <= n; j++) {
      if (j <= i) {
        res += '*';
      }
    }
    console.log(res);
  }
};

rightAngleStar(6);


/*
Given a number N, print the Holo Right Angle Triangle like below:

*      
**     
* *    
*  *   
*   *  
*    * 
*******

NOTE: N should be >=4

*/

const holoRightAngle = (n) => {
  for (let i = 1; i <= n; i++){
    let res = ''
    for (let j = 1; j <= n; j++){
      if (j === 1 || i === n || i === j) {
        res+='*'
      } else {
        res+=' '
      }
    }
    console.log(res)
  }
}
holoRightAngle(7)