//return buffer alloc 2048 instead of null
function answer () {
    return Buffer.alloc(2048)
}

# question 2
// pipe the data to parent process stdout

//process.stdin.pipe(process.stdout)
