
const EventEmmitter = require("node:events");



// const myEmitter = new EventEmmitter();

// myEmitter.on('error',(err)=>{
//     console.log(err.name,err.message);
// })

// myEmitter.emit('error',new Error("woops!"));

const myEmitter = new EventEmmitter();
// myEmitter.captureRejections = true;

// myEmitter.on('something', async ()=>{
//     throw new Error('kaboom')
// })

// myEmitter.on('error', (err)=>{
//     console.log(err.message);
// })


// myEmitter.emit('something')

// const EventEmitter = require('node:events');
// const ee = new EventEmitter();
// ee.on('something', async (value) => {
//   throw new Error('kaboom');
// });

// ee.emit('something')


myEmitter.once('newListener',(event,listener)=>{
    if(event === 'event'){
        myEmitter.on('event',()=>{
            console.log('B');
        })
    }
})

myEmitter.on('event',()=>{
    console.log('A')
});

myEmitter.on('removing',()=>{
    console,log('Event is removed')
})//This adds the listener to the end of the listener array

//To add listener to start of the listener array we should use

myEmitter.prependListener('hello',()=>{
    console.log("hello")
})

//this adds the listener 'hai' only once to the starting of the listener array
myEmitter.prependOnceListener('hai',()=>{
    console.log("hello")
})

myEmitter.emit('event')

myEmitter.once('removeListner',(event,Listner)=>{
    if(event === 'event'){
        myEmitter.emit('removing')
    }
})

console.log(myEmitter.listeners('event'))

console.log(myEmitter.eventNames());

console.log(myEmitter.getMaxListeners());















