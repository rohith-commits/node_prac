
const {Blob,Buffer} = require('node:buffer');


const buff1 = Buffer.alloc(10);

const buff4 = Buffer.alloc(10,1); // Creates a Buffer of length 10 and fills it with 1

const buff2 = Buffer.allocUnsafe(10);

const buff3 = Buffer.from('text','utf-8'); //It should be array otherwise TypeError

//if the from value is a object then it will look for valueof() method

const buff5 = Buffer.from([277,300,400,450],'hex'); //This is truncated to [1,1,1,1] because hexa decimal values can only fit less than 255

// Other character encoding supported by node are
// -utf-8 : If there is a character which is not supported by utf8 it is replaced by ' U+FFFD � '
// utf-16le : Each character is encoded using 2 or 4 bytes
// latin-1 : Supports unicode character from U+0000 to U+00FF. Each character is encoded using single byte if does not fit then it is truncated

/* Modern Web browsers follow the WHATWG Encoding Standard which aliases both 'latin1' and 'ISO-8859-1' to 'win-1252'. This means that while doing something like http.get(), if the returned charset is one of those listed in the WHATWG specification it is possible that the server actually returned 'win-1252'-encoded data, and using 'latin1' encoding may incorrectly decode the characters. */

for(let b of buff5){
    // console.log(b)
}

//Class Blob : It is used to share immutable raw data across multiple worker threads

const blob = new Blob([2,3,4,5]);

// console.log(blob)


const buffer = Buffer.alloc(2);

const blob1 = new Blob(buffer);
// console.log(blob1.size)

//buffer size should not be more than buffer.constans.MAX_LENGTH

// console.log(buff2)
const str =  '\u00bd + \u00bc = \u00be'
console.log(Buffer.byteLength( str)) // byteLength is a static method which gives the bytes used
console.log(str.length) // byteLength is not always equals to String.prototype.length

// Buffer.compare(buff1,buff2,10); //10 is the length of the new buffer, If it is less then the result is truncated
// Buffer.concat(buff1,buff2);

// Buffer.from(arrayBuffer)
// Buffer.from(object)
// Buffer.from(array)
// Buffer.from(buffer|Uint8Array)
// Buffer.from(String)

const ui = new Uint8Array();
console.log(Buffer.isBuffer(ui))

Buffer.isEncoding('utf-8')
 Buffer.poolSize // This is the size of pre-allocated internal Buffer instance for pooling


buff1.equals(buff2)
buff1.entries()
buff1.keys()
buff1.values()
buff1.includes(3)
buff1.indexOf(2)





