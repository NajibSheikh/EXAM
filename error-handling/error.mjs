//fire 'my-event' once 

import {EventEmitter, once}  from 'events'
import { setTimeout } from 'timers/promises'
const ac = new AbortController()
const {signal} = ac
// const myEmitter = new EventEmitter()
// setTimeout(501).then(() => myEmitter.emit('my-event'))
// setTimeout(500).then(() => ac.abort())

// try {
//     await once(myEmitter, 'my-event', {signal})
//     console.log('event fired!')
// } catch (error) {
//     if(error.name === 'AbortError') {
//         console.log('mission aborted!! bye')
//     } else console.log('error')
// }


const ee = new EventEmitter()
setTimeout(2000 * Math.random(), null, {signal}).then(() => ee.emit('uneventful'))
setTimeout(500).then(() => ac.abort())

try {
    await once(ee, 'uneventful', {signal})
    console.log('pinged')
} catch(error) {
    if(error.code !== 'ABORT_ERR'){
        throw console.log('cancled')
    }     
}