const crypto = require('crypto')
const utf8 = require('utf8');

// GET THESE VALUES FROM THE RESPONSE WHEN FETCHING
// THE CHALLENGE AT .../serviceapi/pow/challenge/...
let input = "f02b931c-52f0-4507-9406-f1221678dc16"
let zeroNum = 4

function getHash(input,zeroNum) {
    //let zeros = '0' * zeroNum;
    let zeros = '0'
    while(true) {
        zeros = zeros + '0'
        if(zeros.length === zeroNum) {
            break
        }
    }
    console.log(zeros)
    let postfix = 0;
    while(true) {
         postfix++;
         postfixString = postfix.toString() 
         //console.log(postfixString);
         str = input + postfixString
         //console.log(str)
         hashEncoded = crypto.createHash('sha256').update(utf8.encode(str)).digest('hex')
        // console.log(hashEncoded)
         if(hashEncoded.startsWith(zeros)) {
             return { "postfix":postfix, "hash": hashEncoded }
         }
    }
}


console.log(getHash(input, zeroNum))