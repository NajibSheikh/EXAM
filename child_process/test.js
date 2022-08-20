//reading three files with serial excution
//from txt3 -> txt1
const {readFile, stat, fstat} = require('fs')
const files =  ['./txt1', './txt3', './txt2'] 

// const print = (err, contents) => {
//     if(err) {
//         console.error(err)
//         return
//     }
//     console.log(contents.toString())
// }

// readFile('./txt3', (err, contents) => {
//     print(err, contents)
//     readFile('./txt2', (err, contents) => {
//         print(err, contents)
//         readFile('./txt1', (err, contents) => {
//             print(err, contents)
//         })
//     })
// })


//parallel excutions smallest file will be first to read
// and big file last to read

// const print = (err, contents) => {
//     if(err) {
//         console.error(err)
//         return
//     }
//     console.log(contents.toString())
// }

// readFile('./txt1', print)
// readFile('./txt2', print)
// readFile('./txt3', print)

//all contents of each file will concat them 
//and print one time together

// const data = []
// const print = (err, contents) => {
//     if(err) {
//         console.error(err)
//         return
//     }
//     console.log(contents.toString())
// }
// readFile('./txt1', (err, contents) => {
//     if(err)print(err)
//     else data.push(contents)
//     readFile('./txt2', (err, contents) => {
//         if(err)print(err)
//         else data.push(contents)
//         readFile('./txt3', (err, contents) => {
//             if(err)print(err)
//             else data.push(contents)
//             print(null, Buffer.concat(data))
//         })
//     })
// })

const series = require('fastseries')
const print = (err, data) => {
    if(err) {
        console.error(err)
        return
    }
    console.log(Buffer.concat(data).toString())
}
const readers = files.map((file) => {
    return (_, cb) => {
        readFile(file, (err, contents) => {
            if(err) {
                print(err)
                cb(null, Buffer.alloc(0))
            }
            else cb(null, contents)
        })
    }
})

series[null, readers, null, print]
