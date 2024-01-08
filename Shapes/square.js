/*
Given a number N, print the table for each line from 1 to n like below:

1 2 3 4 5 
2 4 6 8 10 
3 6 9 12 15 
4 8 12 16 20 
5 10 15 20 25 
*/

const printTable = (n) => {
  for (let i = 1; i <= n; i++) {
    let res = '';
    for (let j = 1; j <= n; j++) {
      res += j * i + ' ';
    }
    console.log(res);
  }
};

printTable(4);
