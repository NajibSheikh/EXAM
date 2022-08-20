// function answer has a parametter (n)
//and return function has a parametter (c)
//if typeof the paramettters a number return n+c


const ans = (n) => {
    return(c) => {
        if(typeof n === 'number' && typeof c === 'number')
        return n+c
    }
}
console.log(ans(10)(20))