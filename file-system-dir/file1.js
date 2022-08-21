const { writeFile } = require('fs')
const { promisify } = require('util')

const outFiile = require('path').join(__dirname)

function read (filename) {
    return promisify(readFile)(filename, {encoding: 'utf-8'})
}
function write (filename, content) {
    return promisify(writeFile) (filename, content)
}
async function answer (filename) {

}

//the read () function returns promise that resolves to the content of a
//given file.

//the write() function returns a promise that resolves once a file has been written.

//the answer() function accepts one argument an array of the file paths.

//complete the answer() function to asynchronously read each file using the read() function 
//concatenate the file contents with no delimiter, in the order given in the filenames array.
//then using write() function write the concatenated result to outFile.