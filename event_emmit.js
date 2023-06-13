const EventEmitter = require("./events")

const myEvent = new EventEmitter


myEvent.on("choco",()=>{
    console.log("Event Emitted 1")
})

myEvent.on("cho",()=>{
    console.log("Event Emitted 1")
})

myEvent.clear()
console.log(myEvent.size())
