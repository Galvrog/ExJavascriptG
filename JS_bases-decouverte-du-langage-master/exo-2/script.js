// you can write js here
console.log('exo-2');
isTesting = true;

//      var joursDeLaSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const myDate = new Date();
var jourSemaine = myDate.getDay();
var Heure = myDate.getHours();

console.log(myDate);
console.log(jourSemaine);
console.log(Heure);

let JourdeSemaine = "Jour de la semaine " + jourSemaine;
let JourdeWeekEnd = "Jour de WeekEnd " + jourSemaine;


//  function Jour(){
    //      var joursDeLaSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

if(jourSemaine =[1,2,3,4,5])
{
    console.log(JourdeSemaine);
}
/*  else */ if(jourSemaine = [5] && (Heure>=17))
{
    console.log(JourdeWeekEnd + Heure + "Vendredi");
}
/*  else */ if(jourSemaine = [1] && (Heure<=9))
{
    console.log(JourdeWeekEnd + Heure + "Lundi");
}
if((jourSemaine = 0) || (jourSemaine = 6));
{
    console.log(JourdeWeekEnd);
}
//  }
//  console.log(Jour); 