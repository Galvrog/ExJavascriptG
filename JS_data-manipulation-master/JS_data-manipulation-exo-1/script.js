console.log(`${cities.length} communes chargées`);


const cityTrier = cities.slice().sort(function(a, b) {
    return a.population - b.population;
});

cityTrier.forEach(function(city) {

    if (city.population >=300000){

        console.log(city.nom + ' (' + city.population + ')');
        
    }

});
