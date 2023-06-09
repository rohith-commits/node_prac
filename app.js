const fs = require('node:fs/promises')
const http = require('node:http')
const { resolve } = require('node:path')

const PORT = 8000

const server = http.createServer((req,res)=>{
    const buffer = fs.readFile('text.txt',()=>{
        resolve(buffer)
    }).then((data)=>{
        res.end(data)
    })
    
})

server.listen(PORT,()=>{
    console.log(`RUNNING ON PORT ${PORT}`)
})