//directory playground
//check if directory is there using fs.access

const fs = require('fs')
const path = require('path')

// fs.access('../dir', function (err) {
//     if(err) console.error(err)
//     else console.log('directory exists')
// })
//fs.exist checks if directory exists adn returns boolean

// const dir = fs.existsSync('../dir')
// console.log(dir)

//creating direoctories 

// fs.mkdir('../dir/dir1', function (err) {
//     if(err) console.error(err)
//     else console.log('created directory')
// })

//listing directories and their sub directories

// try {
//     const arrayOfFiles = fs.readdirSync('../dir')
//     console.log(arrayOfFiles)
// } catch (e) {
//     console.error(e)
// }

//deleting directories 

// try {
//     fs.rmdirSync('../dir/dir1')
//     console.log('directory deleted')
// } catch (e) {
//     console.error(e)
// }
