const EventEmitter = require('events')

const customEvent = new EventEmitter()

customEvent.on('response', ()=>{
    console.log('data here')
})



// for more events visit node.js website

//you can pass params to event ==>

customEvent.on('response', (name, id)=>{
    console.log(`data here data name : ${name} data id : ${id}`)
})

customEvent.emit('response', 'ali', 32)  // emit all events that have name response above it