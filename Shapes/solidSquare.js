/*
Given a number N, print the Square shape like below:
       
* * * * * * *
* * * * * * *
* * * * * * *
* * * * * * *
* * * * * * *
* * * * * * *
* * * * * * *

NOTE: N should be >= 3
*/


const printSquare = (n) => {
  for (let i = 1; i <= n; i++) {
    let res = '';
    for (let j = 1; j <= n; j++) {
      if (i !== 1 || j !== 1 || i !== n || j !== n) {
        res += '* ';
      }
    }
    console.log(res);
  }
};

printSquare(3);
