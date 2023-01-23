console.log(`${cities.length} communes chargées`);

function ready(callback) {
  if (document.readyState != 'loading'){
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

ready(function(main){
  const el = document.createElement('div');
  el.innerHTML =  'Je suis un div';
  document.body.appendChild(el);
});


ready(function(VIlleHauteS){
  const VilleHS = cities.filter(cities => cities.code >= 74000 && cities.code <= 75000);
  const cities74=[];
  
  function DisplayCity(VilleHauteSavoie){
      // console.log(VilleHauteSavoie.nom +' ' +VilleHauteSavoie.code);
      cities74.push(VilleHauteSavoie.nom);
  }
  VilleHS.forEach(DisplayCity);

  const al=document.createElement('div');
  al.innerHTML = cities74;
  document.body.appendChild(al);

// 

var vileHauteSavoirSelect = document.getElementById('select');
cities74.forEach(function(Ville){
  const CityOption=document.createElement('option');
  CityOption.innerHTML = Ville;
  vileHauteSavoirSelect.appendChild(CityOption);
});

var combo = document.createElement('select')
VilleHS.forEach(function(Ville){

});

});






// insérer votre acode ci-dessous
// (function main() {
//   const el = document.createElement('div');
//   el.innerHTML =  'Je suis un div';
//   document.body.appendChild(el);
//   });
  