
const weatherApi = {
    key: "b8a07d674b816b118b9e1655ba31407b",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}

const searchInputBox = document.querySelector('.search-bar');

searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
    }

});

function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

    
    
    document.querySelector(".search-btn").addEventListener("click", function () {
    
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
    
    });

function showWeatherReport(weather){
    console.log(weather);

    let city = document.querySelector('.city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.querySelector('.temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let icon=weather.weather[0].icon;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let humidity=document.querySelector('.humidity');
    humidity.innerText=`Humidity :${weather.main.humidity}%`

    let wind=document.querySelector('.wind');
    humidity.innerHTML=`Wind :${weather.wind.speed}`

    let weathericon=document.querySelector(".icon");
    weathericon.src =
        "https://openweathermap.org/img/wn/" + icon + ".png";

    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('https://imageio.forbes.com/specials-images/dam/imageserve/965694882/960x0.jpg?fit=bounds&format=jpg&width=960')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('https://media.thv11.com/assets/ACCUWEATHER/images/585f91c4-ecff-4d76-97e9-13e1ecc8ac94/585f91c4-ecff-4d76-97e9-13e1ecc8ac94_1920x1080.jpg')";
        
    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('https://static.dw.com/image/53378521_303.jpg')";
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('https://media.istockphoto.com/photos/transparent-umbrella-under-rain-against-water-drops-splash-background-picture-id1257951336')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('https://www.farmersalmanac.com/wp-content/uploads/2020/11/words-for-snow-AdobeStock_301401130-1184x630.jpg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('https://indafrica.com/wp-content/uploads/2020/09/Best-Places-Cities-Lightning-A193502306.jpg')";
        
    } else if(weatherType.textContent=='Dust'){
        document.body.style.backgroundImage = "url('https://image.shutterstock.com/image-photo/large-storm-formed-powdered-dust-260nw-1068239909.jpg')";
        
    }
}



