class EventEmitter{
    Master_listener = new Object();
    type;

    on(eventName,fun){
        this.Master_listener[eventName] = fun
        this.type = "once"
        return
    }

    once(eventName,fun){
        this.Master_listener[eventName] = fun
        this.type = "once";
        return
    }

    size(){
        let length = Object.keys(this.Master_listener);
        console.log(length)
        return length.length;
    }

    clear(){
        for(let i in this.Master_listener){
            delete this.Master_listener[i];
        }
    }

    emit(eventName){
        if(!this.Master_listener[eventName]){
            console.log("error")
        }
        else{
            if(this.type == "once"){
                this.Master_listener[eventName]();
                delete this.Master_listener[eventName]
            }
            else{
                this.Master_listener[eventName]()
            }
        }
        
    }

}


module.exports = EventEmitter