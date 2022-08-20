//reading files with promise serial excution

const { readFile } = require('fs').promises
const files = ['./txt3', './txt2','no-file', './txt1']
// const print = (contents) => {
//     console.log(contents.toString())
// }

// readFile('./txt1').then((contents) => {
//     print(contents)
//     return readFile('./txt2')
// })
// .then((contents) => {
//     print(contents)
//     return readFile('./txt3')
// })
// .then(print)
// .catch(console.error)


//reading files with promise based parallel excution 
//using promise.allSettled || .then and catch every Prom

// const print = (contents) => {
//     console.log(contents.toString())
// }
// const readers = files.map((file) => readFile(file))
// Promise.allSettled(readers)
// .then((contents) => {
//     print(contents)
// })
// .catch((reason) => {
//     console.log(reason)
// })

// const print = (contents) => {
//     console.log(contents.toString())
// }
// readFile('./txt3').then(print).catch(console.error)
// readFile('./txt2').then(print).catch(console.error)
// readFile('./txt1').then(print).catch(console.error)



//async and await Promises
//reading files using serial excution using
// const print = (contents) => {
//     console.log(contents.toString())
// }
// async function run() {
//     print(await readFile( '../closure/closure.js'))
//     print(await readFile('./txt3'))
//     print(await readFile('../process/process.js'))
// }
// run().catch(console.error)


//async and await promises
//reading them and concatinating them

// const print = (contents) => {
//     console.log(contents.toString())
// }

// async function run () {
//     const data = [
//         await readFile('./txt3'),
//         await readFile('../node-modules/module.js'),
//         await readFile('../prototype/answer.js')
//     ]
//     print(Buffer.concat(data))
// }
// run().catch(console.error)


//async and await
//pushing data into array nad concat them together

// const print = (contents) => {
//     console.log(contents.toString())
// }

// async function run() {
//     const data = []
//     for(const file of files) {
//         data.push(await readFile(file))
//     }
//     print(Buffer.concat(data))
// }
// run().catch(console.error)


//async and await 
//using promise.all

// const print = (contents) => {
//     console.log(contents.toString())
// }
// async function run () {
//     const readers = files.map((file) => readFile(file))
//     const data = await Promise.all(readers)
//     print(Buffer.concat(data)) 
// }
// run().catch(console.error)


//async and await 
//using promise.allSettled

// const print = (contents) => {
//     console.log(contents.toString())
// }

// async function run () {
//     const readers = files.map((file) => readFile(file))
//     const results = await Promise.allSettled(readers)
//     results 
//     .filter(({status}) => status === 'rejected')
//     .forEach(({reason}) => console.error(reason))
//     const data = results
//     .filter(({status}) => status === 'fulfilled')
//     .map(({value}) => value)
//     print(Buffer.concat(data))
// }
// run().catch(console.error)



//async and await
//using parallel excution

const print = (contents) => {
    console.log(contents.toString())
}

async function run() {
    const big = readFile('./txt1')
    const med = readFile('./txt2')
    const small = readFile('./txt3')
    big.then(print)
    med.then(print)
    small.then(print)

    await(small)
    await(med)
    await(big)
}
run().catch(console.error)
