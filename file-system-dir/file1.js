// question
// const { writeFile } = require('fs')
// const { promisify } = require('util')

// const outFiile = require('path').join(__dirname, 'all.txt')

// function read (filename) {
//     return promisify(readFile)(filename, {encoding: 'utf-8'})
// }
// function write (filename, content) {
//     return promisify(writeFile) (filename, content)
// }
// async function answer (filenames) {

// }

//the read () function returns promise that resolves to the content of a
//given file.

//the write() function returns a promise that resolves once a file has been written.

//the answer() function accepts one argument an array of the file paths.

//complete the answer() function to asynchronously read each file using the read() function 
//concatenate the file contents with no delimiter, in the order given in the filenames array.
//then using write() function write the concatenated result to outFile.

//const { writeFile } = require('fs')

//asnwer
// const { writeFile, readFile, readdirSync, statSync } = require('fs')
// const { promisify } = require('util')

// const outFile = require('path').join(__dirname, 'all.txt')
// const currentDir = require('path').join(__dirname)

// function read (filename) {
//     return promisify(readFile)(filename, {encoding: 'utf-8'})
// }
// function write (filename, content) {
//     return promisify(writeFile) (filename, content)
// }
// async function answer (filenames) {
//   let readContent = '';
   
//   for(let i=0; i<filenames.length; i++) {
//     let currentFile = filenames[i];
//     if(!statSync(currentFile).isDirectory()) {
//       readContent += await read(currentFile);
//     }
//   }
//   await write(outFile, readContent);
// }

// answer(readdirSync(currentDir))

//answer 2

const {readFile, writeFile, readdirSync, statSync} = require('fs')
const {promisify} = require('util')
const path = require('path')
const outFile = require('path').join(__dirname, 'all.txt')

function read (filename) {
  return promisify(readFile)(filename, {encoding: 'utf-8'})
}
function write (filename, content) {
  return promisify(writeFile) (filename, content)
}
async function answer (filenames) {
  let readContent = '';
  for(let file of filenames) {
    if(!statSync(file).isDirectory()){
      readContent += await read (file)
    }
  }
  await write (outFile, readContent)
}
answer(readdirSync(path.join(__dirname)))

