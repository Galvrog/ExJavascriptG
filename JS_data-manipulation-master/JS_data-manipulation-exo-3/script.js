console.log(`${cities.length} communes chargées`);


const VilleHS = cities.filter(cities => cities.code >= 74000 && cities.code <= 75000);
const cities74=[];



function DisplayCity(VilleHauteSavoie){
    // console.log(VilleHauteSavoie.nom +' ' +VilleHauteSavoie.code);
    cities74.push(VilleHauteSavoie.nom);
}

VilleHS.forEach(DisplayCity);



function getCityByName(Ville){
    return Ville.nom =='Annecy';
}

var NbrPopulation=0;

function NbrHabitant(Ville){
   NbrPopulation=NbrPopulation + Ville.population;
}

console.log(VilleHS.find(getCityByName));
// console.log(cities74)
VilleHS.forEach(NbrHabitant);

console.log(NbrPopulation);