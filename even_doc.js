const { func } = require("assert-plus");
const EventEmmitter = require("node:events");

class MyEventEmitter extends EventEmmitter{};
MyEventEmitter.captureRejections = true; //In async event if there is unhandled rejection then the error is directed to error event if captureRejection is set to true

const myEmitter = new MyEventEmitter();

myEmitter.on('event',function(){
    console.log('Event occured');
    console.log(this) //this will point to the EventEmitter instance, if arrow function is used it is pointed to nothing
});

myEmitter.once('doOnce', function(){
    console.log('this will happen only once');
});

//When an error occures an error event is emitted, If error event is not present then Nodejs crashes and throws stack trace
//So always add error event
myEmitter.on('error',function(){        
    console.log('error occured')
})

myEmitter.on('asyncEvent',async function(){
    throw new Error('Async rejection');
})

myEmitter.once('newListener',function(event,listener){
    if(event === 'event'){
        myEmitter.on('event',()=>{
            console.log('From newListener')
        })
    }
})//newListener event is emitted before a new listener is added 

myEmitter.on('removeListener',function(event,listener){
    if(event === 'error'){
        throw new Error();
    }
})//removeListener event is emitted after a listener is removed 


console.log(myEmitter.eventNames(), myEmitter.getMaxListeners()) //1.gives the list of events for which listeners are registered
//2.gives the current max registered value

console.log(myEmitter.listenerCount('event'))//gives the number of times the event name is registered and if listener is provided then it will also give how many times the listener is registered

myEmitter.listeners('event')//returns a copy of array of listeners for that particular event

myEmitter.off('error',()=>{
    console.log('removed')
})

myEmitter.prependListener('first',function(){
    console.log("Iam first")
})//By this the listener is added to the first 

myEmitter.prependOnceListener('onceFirst',function(){
    console.log('Once first');
})

myEmitter.removeAllListeners('error')
myEmitter.removeListener('event',function(){
    console.log('From Event');
})//If Subsiqently we are emiting the listeners then it will emit it evenn if it is deleted earlier, because the array should be rearranged

myEmitter.setMaxListeners(20)//By default the listener limit for a particular event is 10, to exceed that we use setMaxListeners(n) Even n=Infinity is possible



// myEmitter.emit('error', new Error('Woops!'));
myEmitter.emit('asyncEvent')
myEmitter.emit('event');



