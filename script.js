//  const apiKeyWeather = "1d35aab1fca86e01352be284dcde9b5a"
// const apiKeyLocation = '181ab832c4d14359aee27158d520bc9f'

// const city = document.getElementById('cityInput')
// let urlWeather = 'http://api.openweathermap.org/data/2.5/weather?q=london&appid=1d35aab1fca86e01352be284dcde9b5a'
//  let urlWeather = 'https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lng}&appid=181ab832c4d14359aee27158d520bc9f'

const cityInput = document.getElementById("cityInput").value; //récupération de l'input (ville)
const submit = document.getElementById("submit"); //récupération de l'input submit
let urlLocation =
  "https://api.opencagedata.com/geocode/v1/json?q=" +
  cityInput +
  "&key=181ab832c4d14359aee27158d520bc9f";

var daysWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const weekMeteo = new Object;
const arrayDays = [];
const arrayMeteos = []

const choices = document.getElementById("choseDays"); //récuération de la séléction du nombre de jour à afficher (séléction dans l'input déroulant)
var choice = choices.value;
console.log(choice);

/* --------------------------------- to get lat and lng  --------------------------------- */
submit.addEventListener("click", (e) => {
  $.get(urlLocation, function (data) {
    let lat = data["results"][0]["geometry"]["lat"]; //récupération de la latitude
    let lng = data["results"][0]["geometry"]["lng"]; //récupération de la longitude
    let urlWeather =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lng +
      "&exclude=&appid=1d35aab1fca86e01352be284dcde9b5a";
    $.get(urlWeather, function (data) {
      for (var i = 0; i < data["daily"].length; i++) {
        let days = data["daily"][i]["dt"]; //récupération des jours
        let meteo = data["daily"][i]["weather"][0]["main"]; //récupération des meteos
        let convert = new Date(days * 1000).getDay(); //conversion de l'unix timestamp en nombre de jour
        let day = daysWeek[convert]; // assigne le jour 
        arrayDays.push(day)
        arrayMeteos.push(meteo)
        weekMeteo["day"] = arrayDays; //remplissage de l'objet weekMeteo avec la clef 'day' et l'array des jours
        weekMeteo["meteo"] = arrayMeteos; //remplissage de l'objet weekMeteo avec la clef 'meteo' et l'array des meteo
        console.log(weekMeteo, 'zbraaa') 
        // const forValueMeteo = Object.entries(weekMeteo)
        // .slice(0, 3)
        // .map((entry) => entry[0]);
        // console.log( forValueMeteo ,'kesako')
        // console.log(weekMeteo);
        // test();

      }
    });
  });

  // console.log('part 1')
  // return weekMeteo;
});


console.log('part 2', weekMeteo);
// let forValueDay = Object.entries(weekMeteo).slice(0, 3).map((entry) => entry[0]);
/* function test() {
  let x = []
let days = 3
for (let i = 0 ; i< days; i++){
  console.log(Object.keys(weekMeteo))
  x[i] = Object.keys(weekMeteo)[i]
}
for (i in weekMeteo){
  console.log('test', i)
}
console.log(x, 'jambon');
} */

//slice de l'objet weekMeteo pour récupérer la valeur meteo
function creatVariableMeteo(numberOfDays) {
  // endIndex correspond au nombre de jours selectionnés
  const forValueMeteo = Object.entries(weekMeteo)
    .slice(0, numberOfDays)
    .map((entry) => entry[1]);
  return forValueMeteo;
}

//slice de l'objet weekMeteo pour récupérer la clef jour
function creatVariableDay(numberOfDays) {
  // endIndex correspond au nombre de jours selectionnés
  const forValueDay = Object.entries(weekMeteo)
    .slice(0, 3)
    .map((entry) => entry[0]);
  return forValueDay;
}

function choiceSelector(choice) {
  // if (choice == 0) {
    let numberOfDays = choice;
    creatVariableDay(numberOfDays);
    creatVariableMeteo(numberOfDays);
    createConteneur(numberOfDays);
  }


// pour créer la div et append la class d'un conteneur Day
function appendDay(x) {
  let elm0 = document.getElementById("conteneur");
  for (var i = 0; i < x; i++) {
    //pour le choix de l'input déroulant > 7 days
    var div = document.createElement("div");
    let elm1 = elm0.appendChild("div");
    elm1.className = "variableClassjour";
  }
}

// pour créer la div et append la class d'un conteneur Meteo
function appendMeteo() {
  console.log(forValue3Meteo[i]);
  let elm0 = document.getElementById("conteneur");
  for (var i = 0; i < x; i++) {
    //pour le choix de l'input déroulant > 7 days
    var div = document.createElement("div");
    let elm1 = elm0.appendChild("div");
    elm1.className = "variableClassMeteo";
  }
}

// pour créer la div dans laquel vont s'imbriquer le conteneur Day et Meteo
function createConteneur() {
  let elmX = document.getElementById("MaxiDiv");
  for (var i = 0; i < x; i++) {
    //pour le choix de l'input déroulant > 7 days
    var div = document.createElement("div");
    let elm1 = elm0.appendChild("div");
    elm1.className = "variableClassMeteo";
    // appendMeteo()
    // appendDay()
  }
}

  // // faire cette fonction sous forme de boucle ?
  // function dayDispatch(day) {
  //   //pour asscoier la class en focntion du jour (inserer genre forvalue0day iétéré)
  //   if (day == "monday") {
  //   }
  //   if (day == "tuesday") {
  //   }
  //   if (day == "wednesday") {
  //   }
  //   if (day == "thursday") {
  //   }
  //   if (day == "friday") {
  //   }
  //   if (day == "saturday") {
  //   }
  //   if (day == "sunday") {
  //   }
  // }

  // function meteoDispacth(meteo) {
  //   if (meteo == "rain") {
  //   }
  //   if (meteo == "clouds") {
  //   }
  //   if (meteo == "cloudy") {
  //   }
  //   if (meteo == "clear") {
  //   }
  //   if (meteo == "snow") {
  //   }
  // }
