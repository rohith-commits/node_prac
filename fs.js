const fs = require('node:fs')
// ************ Promise API *********//
// function copied(){
//     return new Promise((resolve,reject)=>{
//         fs.copyFile('text.txt','textCopied.txt')
        
//     }).then((err)=>{
//         console.log(err.name,err.message)
//     })
// }

// copied()

// const copyFile = async ()=>{
//     await fs.copyFile('command.txt','commandCopied.txt')
// }
// copyFile()

// *********** CallBack API ***********//

// const callbackCopy = function(){
//     fs.copyFile("text.txt","Copytext.txt",(err,data)=>{
//         console.log(data)
//     })
// }

// callbackCopy();

//************** Synchronous API **********//

// const syncCopy = function(){
//     fs.copyFileSync('text.txt','new.txt') //Don't use this
// }

// syncCopy()



