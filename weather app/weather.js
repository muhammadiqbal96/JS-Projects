let city = document.getElementById("search");
let submit = document.getElementById("submit");
let cityName = document.getElementById("cityname");

const getweather = (city) => {
    cityName.innerHTML = city
	const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=` + city;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '8fd1dfa663mshca17c5ca1b95f22p19dd27jsn266a50d893bf',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	fetch(url, options).then((value) => {
		return value.json()
	}).then((value) => {
		cloud_pct.innerHTML = value.cloud_pct + "%"
		feels_like.innerHTML = value.feels_like + "	°C"
		humidity.innerHTML = value.humidity
		max_temp.innerHTML = value.max_temp + "	°C"
		min_temp.innerHTML = value.min_temp + "	°C"
		sunrise.innerHTML = value.sunrise
		sunset.innerHTML = value.sunset
		temp.innerHTML = value.temp + " °C"
		wind_degrees.innerHTML = value.wind_degrees + "°"
		wind_speed.innerHTML = value.wind_speed + " km/h"
		console.log(value)
	},(error)=>{
		alert(error)
	})

}
submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getweather(city.value);
	city.value = ""
})

getweather("lahore");

citygiven.addEventListener("click",(e)=>{
         getweather(e.target.innerHTML)
})

const meccaweather = () => {
	const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mecca`;
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '8fd1dfa663mshca17c5ca1b95f22p19dd27jsn266a50d893bf',
				'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
			}
		};
	
		fetch(url, options).then((value) => {
			return value.json()
		}).then((value) => {
			document.getElementsByClassName("cloud_pct")[0].innerHTML = value.cloud_pct + "%"
			document.getElementsByClassName("feels_like")[0].innerHTML = value.feels_like + " °C"
			document.getElementsByClassName("humidity")[0].innerHTML = value.humidity
			document.getElementsByClassName("max_temp")[0].innerHTML = value.max_temp + " °C"
			document.getElementsByClassName("min_temp")[0].innerHTML = value.min_temp + " °C"
			document.getElementsByClassName("sunrise")[0].innerHTML = value.sunrise
			document.getElementsByClassName("sunset")[0].innerHTML = value.sunset
			document.getElementsByClassName("temp")[0].innerHTML = value.temp + " °C"
			document.getElementsByClassName("wind_degrees")[0].innerHTML = value.wind_degrees + "°"
			document.getElementsByClassName("wind_speed")[0].innerHTML = value.wind_speed + " km/h"
			console.log(value)
		})}
		meccaweather()

const bostonweather = () => {
const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=boston`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '8fd1dfa663mshca17c5ca1b95f22p19dd27jsn266a50d893bf',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	fetch(url, options).then((value) => {
		return value.json()
	}).then((value) => {
		document.getElementsByClassName("cloud_pct")[1].innerHTML = value.cloud_pct + "%"
		document.getElementsByClassName("feels_like")[1].innerHTML = value.feels_like + " °C"
		document.getElementsByClassName("humidity")[1].innerHTML = value.humidity
		document.getElementsByClassName("max_temp")[1].innerHTML = value.max_temp + " °C"
		document.getElementsByClassName("min_temp")[1].innerHTML = value.min_temp + " °C"
		document.getElementsByClassName("sunrise")[1].innerHTML = value.sunrise
		document.getElementsByClassName("sunset")[1].innerHTML = value.sunset
		document.getElementsByClassName("temp")[1].innerHTML = value.temp + " °C"
		document.getElementsByClassName("wind_degrees")[1].innerHTML = value.wind_degrees + "°"
		document.getElementsByClassName("wind_speed")[1].innerHTML = value.wind_speed + " km/h"
		console.log(value)
	})}
	bostonweather()

const newyorkweather = () => {
const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=new york`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '8fd1dfa663mshca17c5ca1b95f22p19dd27jsn266a50d893bf',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	fetch(url, options).then((value) => {
		return value.json()
	}).then((value) => {
		document.getElementsByClassName("cloud_pct")[2].innerHTML = value.cloud_pct + "%"
		document.getElementsByClassName("feels_like")[2].innerHTML = value.feels_like + " °C"
		document.getElementsByClassName("humidity")[2].innerHTML = value.humidity
		document.getElementsByClassName("max_temp")[2].innerHTML = value.max_temp + " °C"
		document.getElementsByClassName("min_temp")[2].innerHTML = value.min_temp + " °C"
		document.getElementsByClassName("sunrise")[2].innerHTML = value.sunrise
		document.getElementsByClassName("sunset")[2].innerHTML = value.sunset
		document.getElementsByClassName("temp")[2].innerHTML = value.temp + " °C"
		document.getElementsByClassName("wind_degrees")[2].innerHTML = value.wind_degrees + "°"
		document.getElementsByClassName("wind_speed")[2].innerHTML = value.wind_speed + " km/h"
		console.log(value)
	})}
	newyorkweather()

const delhiweather = () => {
const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '8fd1dfa663mshca17c5ca1b95f22p19dd27jsn266a50d893bf',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	fetch(url, options).then((value) => {
		return value.json()
	}).then((value) => {
		document.getElementsByClassName("cloud_pct")[3].innerHTML = value.cloud_pct + "%"
		document.getElementsByClassName("feels_like")[3].innerHTML = value.feels_like + " °C"
		document.getElementsByClassName("humidity")[3].innerHTML = value.humidity
		document.getElementsByClassName("max_temp")[3].innerHTML = value.max_temp + " °C"
		document.getElementsByClassName("min_temp")[3].innerHTML = value.min_temp + " °C"
		document.getElementsByClassName("sunrise")[3].innerHTML = value.sunrise
		document.getElementsByClassName("sunset")[3].innerHTML = value.sunset
		document.getElementsByClassName("temp")[3].innerHTML = value.temp + " °C"
		document.getElementsByClassName("wind_degrees")[3].innerHTML = value.wind_degrees + "°"
		document.getElementsByClassName("wind_speed")[3].innerHTML = value.wind_speed + " km/h"
		console.log(value)
	})}
	delhiweather()

const Shanghaiweather = () => {
const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '8fd1dfa663mshca17c5ca1b95f22p19dd27jsn266a50d893bf',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	fetch(url, options).then((value) => {
		return value.json()
	}).then((value) => {
		document.getElementsByClassName("cloud_pct")[4].innerHTML = value.cloud_pct + "%"
		document.getElementsByClassName("feels_like")[4].innerHTML = value.feels_like + " °C"
		document.getElementsByClassName("humidity")[4].innerHTML = value.humidity
		document.getElementsByClassName("max_temp")[4].innerHTML = value.max_temp + " °C"
		document.getElementsByClassName("min_temp")[4].innerHTML = value.min_temp + " °C"
		document.getElementsByClassName("sunrise")[4].innerHTML = value.sunrise
		document.getElementsByClassName("sunset")[4].innerHTML = value.sunset
		document.getElementsByClassName("temp")[4].innerHTML = value.temp + " °C"
		document.getElementsByClassName("wind_degrees")[4].innerHTML = value.wind_degrees + "°"
		document.getElementsByClassName("wind_speed")[4].innerHTML = value.wind_speed + " km/h"
		console.log(value)
	})}
	Shanghaiweather()

const Dhakaweather = () => {
const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dhaka`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '8fd1dfa663mshca17c5ca1b95f22p19dd27jsn266a50d893bf',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	fetch(url, options).then((value) => {
		return value.json()
	}).then((value) => {
		document.getElementsByClassName("cloud_pct")[5].innerHTML = value.cloud_pct + "%"
		document.getElementsByClassName("feels_like")[5].innerHTML = value.feels_like + " °C"
		document.getElementsByClassName("humidity")[5].innerHTML = value.humidity
		document.getElementsByClassName("max_temp")[5].innerHTML = value.max_temp + " °C"
		document.getElementsByClassName("min_temp")[5].innerHTML = value.min_temp + " °C"
		document.getElementsByClassName("sunrise")[5].innerHTML = value.sunrise
		document.getElementsByClassName("sunset")[5].innerHTML = value.sunset
		document.getElementsByClassName("temp")[5].innerHTML = value.temp + " °C"
		document.getElementsByClassName("wind_degrees")[5].innerHTML = value.wind_degrees + "°"
		document.getElementsByClassName("wind_speed")[5].innerHTML = value.wind_speed + " km/h"
		console.log(value)
	})}
	Dhakaweather()