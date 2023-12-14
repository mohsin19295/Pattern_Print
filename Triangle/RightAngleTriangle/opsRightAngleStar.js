/*
Given a number N, print the Opposite Right Angle Triangle like below:

******
*****
****
***
**
*

NOTE: N should be >=3

*/

const opsRightAngleStar = (n) => {
  for (let i = 1; i <= n; i++) {
    let res = '';
    for (let j = 1; j <= n; j++) {
      if (j >= i) {
        res += '*';
      }
    }
    console.log(res);
  }
};

opsRightAngleStar(6);



/*
Given a number N, print the Holo Opposite Right Angle Triangle like below:

******
*   * 
*  *  
* *   
**    
*     

NOTE: N should be >=4

*/


const holoOpsrightAngle = (n) => {
  for (let i = 1; i <= n; i++) {
    let res = '';
    for (let j = 1; j <= n; j++) {
      if (i === 1 || j === 1 || j === n - i + 1) {
        res += '*';
      } else {
        res += ' ';
      }
    }
    console.log(res);
  }
};

holoOpsrightAngle(6);
