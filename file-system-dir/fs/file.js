//filesystem playground

const fs = require('fs')
const path = require('path')
const {join} = require('path')
const {readFile, writeFile} = require('fs').promises
const { createReadStream, createWriteStream} = require('fs')
const {pipeline, Transform} = require('stream')
const { type } = require('os')


// reading files with Async and Sync ways

//readFile && readFileSync
// fs.readFile('./fileB.txt', 'utf8', function (err, data) {
//     if(err) console.error(err)
//     else console.log('file reading using async method:\n', data)
// })
// const data = fs.readFileSync('./fileB.txt', 'utf8')
// console.log(data.toString())

//writing files with writeFile/writeFileSync and append

// fs.writeFile('./fileB.txt', 'this will over write the contents', function (err) {
//     if(err) console.error(err)
//     else console.log('over wrote')
// })

// fs.appendFile('./fileB.txt', 'this will not over write', function(err) {
//     if(err) console.error(err)
//     else console.log('not over writing')
// })

//creating files using fs.append, fs.writeFile and fs.open
//async and sync

// fs.appendFile('./fileX', 'created from append', function (err) {
//     if(err) console.error(err)
//     else console.log('created')
// })

// fs.writeFile('./fileY', 'this file created using from writeFile', function (err) {
//     if(err) console.error(err)
//     else console.log('created')
// })

// fs.open('./fileZ', 'w', function (err) {
//     if(err) console.error(err)
//     else console.log('created')
// })

//deleting files with fs.unlink

// fs.unlink('./fileZ', function (err) {
//     console.log('deleted')
// })

//rename files using fs.rename

// fs.rename('./file1.txt', './fileA.txt', function (err) {
//     if(err) console.error(err)
//     else console.log('renamed file')
// })

//reading a fileA.txt and over writing its contents to 
//fileB.txt uppercased

// const contents = fs.readFileSync('./fileA.txt', {encoding: 'utf8'})
// fs.writeFileSync(join(__dirname, 'fileB.txt'), contents.toUpperCase())

//reading file and writing the contents into another file
//in append mode.

// const contents = fs.readFileSync('./fileA.txt', {encoding: 'utf8'})
// fs.writeFileSync(join(__dirname, 'fileB.txt'), contents.toUpperCase(), {
//     flag: 'a'
// })

// reading file and write to another file in async callback based

// readFile('./fileC.txt', 'utf8', function (err, contents) {
//     if(err) {
//         console.error(err)
//         return
//     }
//     const out = join(__dirname, 'fileB.txt')
//     writeFile(out, contents.toUpperCase(), {flag: 'a'}, function (err) {
//         if(err) console.error(err)
//         else console.log('task completed')
//     })
// })


//reading and writing file in promise based way

// async function run () {
//     const contents = await readFile('./fileC.txt', 'utf8')
//     await writeFile(join(__dirname, 'fileA.txt'), contents.toUpperCase())
// }
// run().catch(console.error)

// reading and writing file using streams
//and uppercaing them the result

// const createUppercaseStream = () => {
//     return new Transform({
//         transform(chunk, enc, next) {
//             const uppercased = chunk.toString().toUpperCase()
//             next(null, uppercased)
//         }
//     })
// }
// pipeline(
//     createReadStream('./fileA.txt'),
//     createUppercaseStream(),
//     createWriteStream(join(__dirname, 'fileB.txt')), 
//     function (err) {
//         if(err) console.error(err)
//         else console.log('task completed!')
//     }
// )

//reading directories using sync, async and promsise based
//reading the current excuting directory file

// const {readdir, readdirSync} = require('fs')
// const {readdir: readdirProm} = require('fs').promises

// readdir(__dirname, (err, files) => {
//     if(err) console.error(err)
//     else console.log('callback', files)
// })
// try {
//    console.log('SYnc: ', readdirSync(__dirname))
// } catch (err){
//     console.error(err)
// }

// async function run () {
//     const file1 = await readdirProm(__dirname)
//     console.log('Prom: ', file1)
// }
// run().catch(console.error)

//reading current directory stat checking if its a file or directory
//based on sync way

// const files = fs.readdirSync(__dirname)
// for(const name of files) {
//     const stat = fs.statSync(name)
//     const typeLabel = stat.isFile() ? 'file: ' : 'dir: '
//     console.log(typeLabel, name)
// }

//reading current direcotry stat checking if its a file ore directory 
//based on async 

// fs.readdir('.', function (err, files) {
//     for(const name of files) {
//         fs.stat(name, (err, stats) => {
//             if(err) {
//                 console.error(err)
//                 return
//             } else {
//                 const typeLabel = stats.isFile() ? 'dir: ' : 'file: '
//                 console.log(typeLabel, name)
//             }
//         })
//     }
// } )

//reading stat of files and their atime, mtime, ctime and birthtime

fs.readdir('.', (err, files) => {
    if(err) console.error(err)
    else for(const name of files) {
        fs.stat(name, (err, stats) => {
            if(err) console.error(err)
            else {
                const typeLabel = stats.isDirectory() ? 'dir: ' : 'file: '
                console.group(typeLabel, name)
                console.groupEnd()
                console.log('atime: ', stats.atime.toLocaleString())
                console.log('mtime: ', stats.mtime.toLocaleString())
                console.log('ctime: ', stats.ctime.toLocaleString())
                console.log('birthtime: ',stats.birthtime.toLocaleString())
            }
        })
    }
})

