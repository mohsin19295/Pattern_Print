/*
Given a number N, print the Holo Square shape like below:

* * * * * * * * * * 
* * * *     * * * * 
* * *         * * * 
* *             * * 
*                 * 
*                 * 
* *             * * 
* * *         * * * 
* * * *     * * * * 
* * * * * * * * * * 

NOTE: N should be >=3
*/

const holoBox = (n) => {
    for (let i = 1; i <= 2 * n; i++) {
        let res = ''
        for (let j = 1; j <= 2 * n; j++) {
            if (i === 1 || j === 1 || i === 2 * n || j === 2 * n || j <= n - i + 1 || j >= n + i || j >= 2 * n + n - i + 1 || j <= i - n) {
                res += '* '
            } else {
                res += '  '
            }
        }
        console.log(res)
    }
}

holoBox(4)