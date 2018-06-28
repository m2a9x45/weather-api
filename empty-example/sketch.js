var apikey = "2c060adb91b464e04545d6dafa96fbcc";
var city = "London";
var units = "metric";
var url = "http://api.openweathermap.org/data/2.5/weather?q="+ city +"&APPID=" + apikey + "&units=" + units;
var weather = "";
var temp = "";

// url quare in full
// http://api.openweathermap.org/data/2.5/weather?q=London&APPID=2c060adb91b464e04545d6dafa96fbcc&units=metric

function setup() {
  createCanvas(500,500);
  loadJSON(url,gotData);
}

function draw() {
  background(100,100,100);

  if (weather == "Clear") {
    background(255, 247, 43);
  }

  textSize(64);
  text(temp.toString() + '\xB0' + "C",0,0,500,500);
  textAlign(CENTER,CENTER);
}

function gotData(data){
  console.log("got data");
  console.log(data.weather[0].main);
  console.log(data.main.temp);

  temp = data.main.temp;

  if (data.weather[0].main == "Clear") {
    weather = "Clear";
  }
}
