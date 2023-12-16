const printJ = (n) => {
    for (let i = 1; i <= n; i++) {
        let res = ''
        for (let j = 1; j <= n; j++) {
            if (i === 1 || j === Math.ceil(n / 2) || (i === n && j <= Math.ceil(n / 2)) || (j === 1 && i > Math.ceil(n / 2))) {
                res += '*'
            } else {
                res += ' '
            }
        }
        console.log(res)
    }
}
printJ(8)