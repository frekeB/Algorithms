const Stream = require('stream')
const readableStream = new Stream.Readable()




function isValidEmail(input) {
    const firstPart = input.split("@")[1]
    const secondpart = firstPart.split(".")
    return true;
}

console.log(isValidEmail("ndyetuk@gmail.com"))

