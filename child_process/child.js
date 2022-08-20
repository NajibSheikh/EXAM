// run child process of the parametter

const { stat } = require('fs')


// const fork = require('child_process')
// process.on('message', function(m) {
//     console.log('Child process received:', m);
//   });

//   process.send({ hello: 'from child process' });
//     if(typeof process.platform === 'win32') {
//     process.exit(1)
// }

//run child process of the parameter 

// function answer (command) {
//     
// }

// function answer (command) {
//     var cp = require('child_process');
//     let cp_child;
//     try {
//         cp_child = cp.spawn(process.execPath, ['-e', "console.log('a')"], { stdio: ['pipe', 'pipe', 'pipe']});

//         cp_child.on('error', (err)=> {console.log(err)})
//     } catch (ex) {
//         console.log(ex)
//     }

//     return cp_child
// }
// // stdin.pipe(process.stdout)
// var sp = answer()
// sp.stdout.pipe(process.stdout)


// function ans(command) {
//     const { spawn } = require('child_process')
//     sp = spawn(process.execPath,
//         ['-p', `process.chdir("./") process.cwd();process.stdin.pipe(process.stdout)`], { shell: true },
//         { stio: ['pipe', process.stdout, 'ignore'] })

// }

// ans()
// sp.stdin.pipe(process.stdout)
//sp.stdout.pipe(process.stdout)


// const {exec} = require('child_process')
// exec('ls -lh', (error, stdout, stderr) => {
//     if(error) {
//         console.error(`error: ${error.message}`)
//         return
//     }
//     if(stderr){
//         console.error(`stderr: ${stderr}`)
//         return
//     }
//     console.log(`stdout: ${stdout}`)
// })



//sp.stdin.pipe(process.stdout)
//sp.stderr.pipe(process.stdout)



function func (command) {
    const {spawn} = require('child_process')
    const sp = spawn(
        process.execPath,
        ['-e', `process.chdir("../");process.cwd();process.stdin.pipe(process.stdout)`],
        {stdio: ['pipe', 'pipe', 'pipe']}
    )
    sp.stdin.pipe(process.stdout)
    sp.stdout.pipe(process.stdout)
    sp.on('close', (status) => {
        console.log('code ', status)
    })
    sp.on('exit', (code) => {
        console.log('code ',code)
    })
} 
func()

