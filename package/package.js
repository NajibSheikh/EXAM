// install these packages 

//Advanced tools


//@davidmarkclements/dragon at exact @2.5.2
//try it manually and then install npm i


//@davidmarkclements/camel@14.0.3
//greater or equal
//absolute path for any module/directory/filepath

//absolute path and basename/ only folder project

// const { basename } = require('path');
// const path = require('path')
// const p = path.resolve()
// console.log(p);
// const filename = path.basename(p)
// console.log(filename)

// console.group('# package resolutions')
// console.log(`require('@davidmarkclements/camel')`, '/n/n', '=>', require.resolve('@davidmarkclements/camel'))
// console.log(`require(@davidmarkclements/bear)`, '/n/n', '=>', require.resolve('@davidmarkclements/bear'));
// console.log(`require('@davidmarkclements/dragon')`, '/n/n', '=>', require.resolve('@davidmarkclements/dragon'));
// console.groupEnd()
// console.group('# direcotroy resolutions')
// console.log(`require('.')`, '/n/n', '=>', require.resolve('.'))
// console.log(`require('../node-modules)`, '/n/n', '=>', require.resolve('../node-modules'))
// console.log(`require('../buffer/buffer')`, '/n/n', '=>', require.resolve('../buffer/buffer'));
// console.groupEnd()
// console.group('# file resoltions')
// console.log(`require('../buffer/buffer')`, '/n/n', '=>', require.resolve('../buffer/buffer'));
// console.log(`require('../closure/closure)`, '/n/n', '=>', require.resolve('../closure/closure'));
// console.log(`require('../unit-testing/package-lock.json')`, '/n/n', '=>', require.resolve('../unit-testing/package-lock.json'));
// console.groupEnd()
// console.group('# core APIs')
// console.log(`require('fs')`, '/n/n', '=>', require.resolve('fs'))
// console.log(`require('util')`, '/n/n', '=>', require.resolve('util'))
// console.log(`require('spawn')`, '/n/n', '=>', require.resolve('child_process'))
// console.groupEnd()
//function exercise (myEnvVar) {
//     return require('child_process').spawn(process.argv[0], ['-p', 'procces.env'], {env: {MY_ENV_VAR: 'myEnvVar'}})
// }
// exercise()
