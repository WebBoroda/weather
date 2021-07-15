fetch('https://api.openweathermap.org/data/2.5/weather?q=Kolomyia&appid=5717026ce135a77a82dfa4c05e424ba4&units=metric&lang=ua')

	.then(function (resp) { return resp.json() })
	.then(function (data) {
		console.log(data);
		document.querySelector('.city-name').innerHTML = data.name;
		document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&#8451;';
		document.querySelector('.wether-desription').textContent = data.weather[0]['description'];
		//https://openweathermap.org/img/wn/01d@2x.png
		document.querySelector('.img').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
		document.querySelector('.humidity').innerHTML = data.main.humidity;
		document.querySelector('.winter').innerHTML = data.wind.speed;
		
	})
	.catch(function () {
	
	});