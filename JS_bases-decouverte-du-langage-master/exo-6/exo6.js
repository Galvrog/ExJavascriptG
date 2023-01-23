// Cours 8 de Codecademya
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe

console.log(joeInfo.cars);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.

joeInfo.bathrooms = joeInfo.bathrooms-2;
console.log(joeInfo.bathrooms);

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo.garage=true;
console.log(joeInfo.garage);



var BasketballTeam = {

    players:[   
        {firstName:"Adam",lastName:"Goldberg",age :20},
        {firstName:"IkSethe",lastName:"Rees",age :24},
        {firstName:"Marcus",lastName:"Cross",age :22},
        {firstName:"Ingmar",lastName:"Khan",age :22},
        {firstName:"Seth",lastName:"Grimes",age :19},
    ],
    
    games:[
        {opponent:"Red Owls",teamPoints:51,opponentPoints:42},
        {opponent:"Blue Cardinals",teamPoints:38,opponentPoints:46},
        {opponent:"Ostrich United",teamPoints:75,opponentPoints:58},
        {opponent:"Green Angels",teamPoints:64,opponentPoints:61},
    ],

    addPlayer: function(firstName, lastName, age) {
    let players = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
    this.players.push(players);
},


    addGame: function(opponent, teamPoints, opponentPoints) {
    let games = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints:opponentPoints 
    };
    this.games.push(games);
    }
}

BasketballTeam.addPlayer("Jeff", "Doug", 25);
BasketballTeam.addPlayer("Parking", "Peter", 23);
BasketballTeam.addPlayer("Joe", "Mama", 26);
console.log(BasketballTeam.players);

BasketballTeam.addGame("Badgers Olympic",84,75);
BasketballTeam.addGame("Devon Rangers",101,106);
BasketballTeam.addGame("Purple Bears",64,65);
console.log(BasketballTeam.games);


const tmPts = addGame.map(function (teamPoints) { // Isolation points my Team
    return teamPoints.teamPoints
});
const tmPts1 = addGame1.map(function (teamPoints) {
    return teamPoints.teamPoints
});
const tmPts2 = addGame2.map(function (teamPoints) {
    return teamPoints.teamPoints
});

console.log('1stGame = '+ tmPts); // Affichage Total Point 
console.log('2ndGame = '+ tmPts1);
console.log('3rdGame = '+  tmPts2);



console.log(sumMyTeam);