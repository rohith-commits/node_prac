const {Buffer} = require('node:buffer')

const buf = Buffer.alloc(8); //this means allocate 8 bytes, each byte is in hexadecimal
buf.write('string','utf-8')//what we are saying is take the string, give it byte according to utf-8 and write it to buffer

//If I write more than buffer size then its gonna ignore it


console.log(buf.toJSON())//in JSON format and hexa values to decimal values
console.log(buf.length)
console.log(buf[0])

const buff2 = Buffer.from("Hello","utf-8")//This will automatically allocate memory and buffers it
console.log(buff2)
console.log(buff2.toString('utf-8'))

//buffers are not resizables


