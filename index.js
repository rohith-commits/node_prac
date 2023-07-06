const movies_data = require("./movie_data.json");

movies_data.find((item)=>{
    if(item.id ===1){
        console.log(item.name)
    }
})