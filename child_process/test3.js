const {readFile} = require('fs')
const ac = new AbortController()
const {signal} = ac
setTimeout(() => {
    readFile('./txt3', {signal, encoding: 'utf-8'}, (error, contents) => {
        if(error) {
            if(error.code === 'ABORT_ERR' || error.name === 'AbortError') {
                console.log('Read file process was aborted')
            } else {
                console.error(error)
            }
            return
        }
        console.log(contents)
    })
}, 1000)
setImmediate(() => {
    ac.abort()

})

// const { time } = require('console')
// const {setTimeout} = require('timers/promises')

// const timeout = setTimeout(100, 'will not be logged')
// setImmediate(() => {
//     clearTimeout(timeout)
// })
// console.log(await timeout)