/*
Given a number N, print the Alphabets in reversive Pyramid shape like below:

A A A A A A A A A A A A A 
  B B B B B B B B B B B   
    C C C C C C C C C     
      D D D D D D D       
        E E E E E         
          F F F           
            G 

NOTE: N should be >=3
*/

const reverseAlphabeticPyramid = (n) => {
  const arr = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
    
  let [px, py] = [1, n * 2 - 1];
  for (let i = 1; i <= n; i++) {
    let res = '';
    for (let j = 1; j <= n * 2 - 1; j++) {
      if (i === 1 || j === px || j === py || (j > px && j < py)) {
        res += arr[i - 1] + ' ';
      } else {
        res += '  ';
      }
    }
    px++;
    py--;
    console.log(res);
  }
};

reverseAlphabeticPyramid(7);
