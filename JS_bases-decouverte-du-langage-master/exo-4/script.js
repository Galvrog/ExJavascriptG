// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];


console.log(secretMessage);

secretMessage.pop();
secretMessage.push('to', 'program');

console.log(secretMessage);


objIndex = secretMessage.findIndex((obj => obj.id == 7));
secretMessage[objIndex] = "right";

console.log(secretMessage);

secretMessage.shift();

console.log(secretMessage);


secretMessage.unshift('Programming');

console.log(secretMessage);


let startIndexDelete = 6;
let endIndexDelete =10;
secretMessage.splice(startIndexDelete, endIndexDelete, 'know');

console.log(secretMessage);



document.write(secretMessage.join(", "));