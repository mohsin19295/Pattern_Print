/*
Given a number N, print the alphabet character 'C' like below:

* * * * * * 
*      
*      
*      
*      
* * * * * * 

NOTE: N should be >= 3
*/

const printC = (n) => {
  for (let i = 1; i <= n; i++) {
    let res = '';
    for (let j = 1; j <= n; j++) {
      if (j === 1 || i === 1 || i === n) {
        res += '* ';
      } else {
        res += ' ';
      }
    }
    console.log(res);
  }
};

printC(6);