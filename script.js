
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var cityname = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity')
var wind = document.querySelector('.wind')
var UVindex = document.querySelector('.UVindex')

//simplified way to have the data pop up from 
button.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=2837134d6be430b022aba1c0c2a00433')
.then(Response => Response.json())
.then(data => {
  var nameValue = data['name'];
  var tempValue = data['main']['temp'];
  var descValue = data['weather'][0]['description'];
  var humidValue = data['main']['humidity'];
  var windValue = data['wind']['speed']
  var lonValue = data['coord']['lon']
  var latValue = data['coord']['lat']

 localStorage.setItem('latitude', latValue)
 localStorage.setItem('longitude', lonValue)

  cityname.innerHTML = nameValue;
  temp.innerHTML = tempValue
  desc.innerHTML = descValue;
  humidity.innerHTML =humidValue;
  wind.innerHTML =windValue;
})
//i am calling another fetch for the 5 day forecast
.then(() => {
  fetchApi1()
})
.catch(err => alert("Wrong city Name!"))

})
//this is actually call for the uv and the five day forecast
function fetchApi1() {
  var latitude = localStorage.getItem('latitude')
  var longitude = localStorage.getItem('longitude')

  //I want to display the same values above for my 5 day forecast.
  //temperature, 
}
  //this api call works
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=2837134d6be430b022aba1c0c2a00433')
  .then(Response => Response.json())
  //this data shows in the console
  .then(data => console.log(data))
  .then(data => {
    var desctable = data['weather']['description'];
    desc.innerHTML = desctable;
  }
);
  
  