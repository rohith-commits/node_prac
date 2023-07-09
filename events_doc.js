const EventEmmitter = require("node:events");

const event = new EventEmmitter();

event.on('greet',(pharse)=>{
    console.log(pharse)
});

event.emit('greet',"hello noob");