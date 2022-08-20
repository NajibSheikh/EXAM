// const os = require('os')
// function ans () {
//     if(os.platform === 'win32') {
//         process.exit(1)
//     }
//     else if (os.platform === 'linux') {
//         process.exit(2)
//     }
//     else (os.platfrom === 'darwin') 
//         process.exit(3)
    
// }

// console.log('this will keep open!')
// if(process.platform === 'linux') {
//         process.exit(1)
// }
// if(process.platform === 'darwin') {
//         process.exit(2)
// }
// if(process.platform === 'win32') {
//         process.exit(3)
// }
// console.log('hi')
// process.on('exit', (code) => {
//     console.log('exited with code ', code)
// })


if(process.platform === 'darwin') {
    process.exitCode = 1
}
if(process.platform === 'linux') {
    process.exitCode = 2
}
if(process.platform === 'win32') {
    process.exitCode = 3
}
console.log('hi')

process.on('exit', (code) => {
    console.log('exited with code ', code)
})


console.log('bye')
