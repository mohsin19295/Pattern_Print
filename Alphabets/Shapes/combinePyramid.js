/*
Given a number N, print the Alphabets in Pyramid shape like below:

         A           
        B B B         
      C C C C C       
    D D D D D D D     
  E E E E E E E E E   
F F F F F F F F F F F 
  G G G G G G G G G   
    H H H H H H H     
      I I I I I       
        J J J         
          K  

NOTE: N should be >=3 & <= 13
*/

const combinePyramid = (n) => {
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
  let [qx, qy] = [1, n * 2 - 1];
  for (let i = 1; i <= n * 2 - 1; i++) {
    let res = '';
    for (let j = 1; j <= n * 2 - 1; j++) {
      if (
        j === px ||
        j === py ||
        j === qx - n + 1 ||
        j === qy + n - 1 ||
        (j < px && j > py && i <= n) ||
        (j > qx - n + 1 && j < qy + n - 1 && i > n)
      ) {
        res += arr[i - 1] + ' ';
      } else {
        res += '  ';
      }
    }
    px++;
    py--;
    qx++;
    qy--;
    console.log(res);
  }
};

combinePyramid(13);
