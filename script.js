


// try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
// } catch (error) {
//     console.error(error);
// }
const getWeather = (city) => {
    cityname.innerHTML = city
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0e9beece0fmshaf90acd1bc9c78cp111a01jsne855db37d847',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch(url, options)
        .then(Response => Response.json())
        .then(Response => {
            console.log(Response)
            cloud_pct.innerHTML = Response.cloud_pct

            feels_like.innerHTML = Response.feels_like
            humidity.innerHTML = Response.humidity
            max_temp.innerHTML = Response.max_temp
            min_temp.innerHTML = Response.min_temp
            // sunrise.innerHTML = Response.sunrise
            // sunset.innerHTML = Response.sunset
            temp.innerHTML = Response.temp
            wind_degrees.innerHTML = Response.wind_degrees
            wind_speed.innerHTML = Response.wind_speed
        })

        .catch(err => console.log(err));
}
submit.addEventListener('click', (e) => {
    e.preventDefault()
    getWeather(city.value);
})
getWeather("Delhi")
