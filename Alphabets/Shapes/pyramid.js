/*
Given a number N, print the Alphabets in Pyramid shape like below:

          A             
        B B B           
      C C C C C         
    D D D D D D D       
  E E E E E E E E E     
F F F F F F F F F F F 

NOTE: N should be >=3 & <= 26
*/

const alphabeticPyramid = (n) => {
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

  let [px, py] = [n, n];
  for (let i = 1; i <= n; i++) {
    let res = '';
    for (let j = 1; j <= n * 2; j++) {
      if (j === px || j === py || (j < px && j > py)) {
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

alphabeticPyramid(6);
