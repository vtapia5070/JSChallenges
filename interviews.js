// interview questions

/********************* Workday **************************/
// target container
var containerEl = document.getElementById('container');

function log (data) {
  var childEl = document.createElement('div');
  childEl.innerHTML = data;
  // document.createElement('div')
  // containerEl.appendChild(childEl)
  containerEl.append(childEl);
}

log(123)
log(456)

class Component {
  constructor () {
    this.events = {}
  }

  on (eventName, callback) {
    // assign the callback invocation to the eventName
    // if (!this.events) {
    //   this.events = {};
    // }

    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);

    // this.events[eventName] = callback;
    // this.fire = callback
  }

  fire (eventName, data) {
    for (var i = 0; i < this.events[eventName].length; i++) {
      if (this.events[eventName]) {
        this.events[eventName][i](data);
      }
    }
    // this.events[eventName](data);
  }

  cancel (eventName) {

  }
}

let component = new Component()

component.on('myEvent1', (data) => {
  log(data)
})

component.on('myEvent1', (data) => {
  log(data)
})

log('my workflow starts')
component.fire('myEvent1', 1000)

/********************* Dropbox **************************/

// Example: https://s3-us-west-2.amazonaws.com/s.cdpn.io/266205/New_York_City.json

// Mock: https://www.dropbox.com/s/1t21mnbkudc7mzh/Weather-mock-2.png?dl=0

var base_path = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/266205/";
var cities = [
  "San_Francisco",
  "Miami",
  "New_Orleans",
  "Chicago",
  "New_York_City"
];

// Convert from Meters Per Second to Miles Per Hour
function fromMPStoMPH(mps) {
  return (Math.round(10 * mps * 2.2369362920544) / 10);
}

// Convert from Kelvins to Fahrenheit
function convertKtoF(kelvin) {
  return Math.round((kelvin - 273.15) * 1.8);
}

// Weather icon
function getIconURL(icon) {
  return "http://openweathermap.org/img/w/" + icon + ".png";
}

class City {
  constructor (cityData) {
    this.name = cityData.name;
    this.temp = convertKtoF(cityData.main.temp);
    this.weather = cityData.weather[0].main;
    this.icon = getIconURL(cityData.weather[0].icon);
  }

  renderName () {
    var nameEl = document.createElement('div');
    nameEl.appendChild(document.createTextNode(this.name));
    nameEl.className = 'cityName'
    return nameEl;
  }

  renderTemp () {
    var tempEl = document.createElement('div');
    tempEl.appendChild(document.createTextNode(this.temp));
    tempEl.className = 'temp';
    return tempEl;
  }

  render () {
    var cityContainerEl = document.createElement('div');
    cityContainerEl.className = 'cityContainer';
    cityContainerEl.appendChild(this.renderName());
    cityContainerEl.appendChild(this.renderTemp());

    return cityContainerEl;
  }

}

function generateTemplate (city, index) {
  var cityTemplates = [];
  var weatherContainerEl = document.getElementById('weather');

  cityTemplates[1] = new City(city);

  var cityEl = cityTemplates[1].render();

  weatherContainerEl.appendChild(cityEl);

}

// get data for an individuak city
function getCityData (city) {

  $.ajax({
    url: base_path + city + '.json'
  })
  .done(function (resp) {
    generateTemplate(resp);
  })
  .fail(function (err) {
    console.log('err:', err);
  });

}

// init function
function init () {

  // loop through cities
  for (var i = 0; i < cities.length; i++) {
      getCityData(cities[i]);
  }

}

init();
/******designs****/

/* font-family: OpenSans, sans serif;
header {
  top: 0;
  padding: 20px 0;
  border-bottom: 1px solid #cecece;
  width: 100%;
  text-align: center;
}

ul,
li {
  list-style: none;
}

.weather-cards li {
  box-sizing: border-box;
  padding: 10px;
  width: 200px;
  border: 1px solid #cecece;
  text-align: center;
}

.weather {
  border: #3d464d 1px solid;
}

.cityContainer {
  display: inline-block;
  border-radius: 4px;
  height: 200px;
  box-sizing: border-box;
  padding: 10px;
  width: 200px;
  border: 1px solid #cecece;
  text-align: center;
  margin: 0 20px;
}
*/

/*******html**********/
/*

<header>
  <h1>Weather in the United States</h1>
</header>

<section class="weather" id="weather">
</section>

*/
