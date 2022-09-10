//require package path- file resolutions-directory resolutions 
// using CJS not ESM
console.group('# package resolutions')
console.log()
console.log(`require('fastify')`, '\n', '=>', require.resolve('fastify'))
console.log(`require('@davidmarkclements/dragon')`, '\n', '=>', require.resolve('@davidmarkclements/dragon'))
console.log(`require('@davidmarkclements/camel')`, '\n', '=>', require.resolve('@davidmarkclements/camel'))
console.log(`require('@davidmarkclements/bear')`, '\n', '=>', require.resolve('@davidmarkclements/bear'))
console.groupEnd()
console.group('# directory resolutions')
console.log(`require('.')`, '\n', '=>', require.resolve('.'))
console.log(`require('../node-modules')`, '\n', '=>', require.resolve('../node-modules'))
console.groupEnd()
console.group('# file resolutions')
console.log(`require('../node-modules/module')`,'\n', '=>', require.resolve('../node-modules/module'))
console.log(`require('../closure/closure')`, '\n', '=>', require.resolve('../closure/closure'))
console.groupEnd()
console.group('# core APIs')
console.log(`require('fs')`, '\n', '=>', require.resolve('fs'))
console.log(`require('util')`, '\n', '=>', require.resolve('util'))
console.groupEnd()

//install npm @davidmarkclements/camel greater than or equal @4.13.0 
//and only supperts patch release

//install npm  @davidmarkclements/bear greater than or equal @2.1.0 
//and only supperts minor release

//install npm @davidmarkclements/dragon at exat @2.5.2

//install npm as a dev dependencies @davidmarkclements/unicorn 

//install npm @davidmarkclements/camel latest but other dependencies not to rely on them
//hint not production dependency
//complementary options --save-dev and --save-optional which save the package 
//under devDependencies and optionalDependencies, respectively.


//require full path of dependencies in package.json 

const {readFile} = require('fs').promises
readFile('./package.json', 'utf-8')
.then(data => JSON.parse(data))
.then(({dependencies}) => {
    const modules = Object.keys(dependencies)
    modules.forEach(module => {
        console.log(require.resolve(module))
    })
})
.catch(console.error)