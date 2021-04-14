const KEY = '&appid=be6f63fc1647ab8a47c1cf20b949702f'
const url = 'https://api.openweathermap.org/data/2.5/weather?q='
let output = document.getElementById('output')
let aa

// const timeKey = 'AIzaSyA9C-Z-KcAoOwqqxdSqdNJcHndrxu8lYO0' 
// const time = 'https://maps.googleapis.com/maps/api/timezone/json?location='



const getWeather = async (event) => {
    output.innerHTML=''
event.preventDefault()
let city = document.getElementById('city')
let api = url + city.value + KEY
const res = await fetch(api)
const req = await res.json()
console.log(req)

weatherReport(req)

DG.then(req)



}


const weatherReport = (el) => {
    let name = document.createElement('h1')
    let temp = document.createElement('h3')
    let wind = document.createElement('h3')
    let sky = document.createElement('h3')
    let time = document.createElement('h3')
    let p = document.createElement('h2')

    d = new Date()
    localTime = d.getTime()
    localOffset = d.getTimezoneOffset() * 60000
    utc = localTime + localOffset
    var atlanta = utc + (1000 * el.timezone)
    nd = new Date(atlanta)


  name.innerHTML=el.name
  temp.innerHTML=`Температура: ${el.main.temp - 273.15}°`
  wind.innerHTML=`Направление ветра: ${el.wind.deg}° ; Скорость ветра: ${el.wind.speed} км/ч`
  sky.innerHTML=`Небо: ${el.weather[0].description}`
  p.innerHTML='__________'
  time.innerHTML=`Дата и время: ${nd}`
  

  output.appendChild(name)
  output.appendChild(temp)
  output.appendChild(wind)
  output.appendChild(sky)
  output.appendChild(p)
  output.appendChild(time)
  document.body.appendChild(output)


 
  


// let aa = `${time}${el.coord.lat},${el.coord.lon}&timestamp=1331161200&key=${timeKey}`
// console.log(aa)

// const timeWeather = async () => {

//     const res = await fetch(aa)
//     const req = await res.json()
//     console.log(req)
    
//     }

  DG.then(function () {
    map = DG.map('map', {
        center: [el.coord.lat, el.coord.lon],
        zoom: 13
    });
    DG.marker([el.coord.lat, el.coord.lon]).addTo(map).bindPopup('Вот здесь центр!');
});


}


    

// const timeWeather = async () => {

// const res = await fetch(time)
// const req = await res.json()
// console.log(req)

// }