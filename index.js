var inputData = document.querySelector('.input')
var btn = document.querySelector('.btn');
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')

const apikey = "3045dd712ffe6e702e3245525ac7fa38"

function convertion(val){
    return (val - 273).toFixed(2)
}

btn.addEventListener('click', ()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputData.value+'&appid='+apikey)
    .then(res => res.json()).then(data => {
        // console.log(data)
            var descrip = data.weather[0].description;
            var tempature = data.main.temp;
            var wndspd = data.wind.speed;

            temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
            description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
            wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
    })
    .catch(err => alert('You entered Wrong city name'))
})