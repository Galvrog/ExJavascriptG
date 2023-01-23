console.log(`${cities.length} communes chargées`);


// const cityTrier = cities.slice().sort(function(a, b) {
//     return a.population - b.population;
// });


// cityTrier.forEach(function(city) {

//         if (city.population >=300000){
//         console.log(city.nom + ' (' + city.population + ')');
            
//         }

//     });



    const VilleHS = cities.filter(cities => cities.code >= 74000 && cities.code <= 75000);

    VilleHS.forEach(function DisplayCity(VilleHauteSavoie){

        console.log(VilleHauteSavoie.nom +' ' +VilleHauteSavoie.code);

    });
    