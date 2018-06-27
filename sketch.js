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
  // background(174, 174, 175);

  loadJSON(url,gotData);

}

function draw() {
  textSize(64);
  text(temp.toString(),250,250,70,80);



  if (weather == "Clear") {
    // background(255, 247, 43);
  }
  else {
    // background(174, 174, 175);
  }
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
