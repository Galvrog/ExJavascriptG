// you can write js hereoz

console.log('exo-5');



var input =("fzauhduhfizzahfazea");
var vowels =['a' , 'e' ,'i' , 'o' , 'u', 'y'];

var ResultArray=[];
console.log(input);


for (let i = 0; i < input.length; i++) {
    //  console.log(input[i]);

    if (vowels.indexOf(input[i].toLowerCase()) == -1) {
       console.log(input[i] + " consonne");
      } else {
        console.log(input[i] + " voyelle");
        ResultArray.push(input[i]);
      }
    
}

console.log(ResultArray.join('').toUpperCase());


/*
while(input.length){

    let i = 0;

        console.log(i)

    i++
}
*/