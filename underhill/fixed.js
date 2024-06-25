/**
 * This function takes a jumbled set of what I believe is hex
* decodes his message and spits it out. You might blame greybeard for the adventure
 * @param {string} scrambledMessage - the list of actions
 */
let message = "NO ADMITTANCE 7b6374662d4558434550542d4f4e2d50415254592d425553494e4553537d"
function decoder(scrambledMessage) {
var str = '';
for (let n = 0; n < scrambledMessage.length; n += 2) {
str += String.fromCharCode(parseInt(scrambledMessage.substring(n, n+2), 16));
}
return str;
}
let scrambledMessage = message.substring(14);
console.log(scrambledMessage)
const fixedScript = decoder(scrambledMessage);
console.log(fixedScript);

