/*
Given a number N, print the Square shape like below:

* * * * * 
*       * 
*       * 
*       * 
* * * * * 

NOTE: N should be >=3
*/

const printSquare = (n) => {
  for (let i = 1; i <= n; i++) {
    let res = '';
    for (let j = 1; j <= n; j++) {
      if (j === 1 || j === n || i === 1 || i === n) {
        res += '* ';
      } else {
        res += '  ';
      }
    }
    console.log(res);
  }
};

printSquare(5);
