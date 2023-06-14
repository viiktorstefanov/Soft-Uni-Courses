function attachEvents() {
    let getWeatherElement = document.getElementById('submit');
    getWeatherElement.addEventListener('click', getWeather);


}

function getWeather(e) {
    fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
        .then(data => data.json())
        .then(info => {
            let locationElement = document.getElementById('location');
            let forecastElement = document.getElementById('forecast');
            forecastElement.style.display = 'block';
            let currentDivElement = document.getElementById('current');
            let currTown = info.find(x =>
                x.name === locationElement.value);
            fetch(`http://localhost:3030/jsonstore/forecaster/today/${currTown.code}`)
                .then(data => data.json())
                .then(info => {
                    document.querySelectorAll('#current .forecasts').forEach(x => x.remove());
                    document.querySelectorAll('#upcoming .forecast-info').forEach(x => x.remove());
                    let symbol = '';
                    switch (info.forecast.condition) {
                        case 'Rain': symbol = "☂"; break;
                        case 'Sunny': symbol = "☀"; break;
                        case 'Partly sunny': symbol = "⛅"; break;
                        case 'Overcast': symbol = "☁"; break;
                    }
                    let divElementForecasts = document.createElement('div');
                    divElementForecasts.classList.add('forecasts');

                    let spanSymbolElement = document.createElement('span');
                    spanSymbolElement.classList.add('condition');
                    spanSymbolElement.classList.add('symbol');
                    spanSymbolElement.textContent = symbol;

                    let spanConditionElement = document.createElement('span');
                    spanConditionElement.classList.add('condition');

                    let spanCityElement = document.createElement('span');
                    spanCityElement.classList.add('forecast-data');
                    spanCityElement.textContent = `${info.name}`;
                    let spanDegreeElement = document.createElement('span');
                    spanDegreeElement.classList.add('forecast-data');
                    spanDegreeElement.textContent = `${info.forecast.low}°/${info.forecast.high}°`;
                    let spanWeatherElement = document.createElement('span');
                    spanWeatherElement.classList.add('forecast-data');
                    spanWeatherElement.textContent = `${info.forecast.condition}`;

                    spanConditionElement.appendChild(spanCityElement);
                    spanConditionElement.appendChild(spanDegreeElement);
                    spanConditionElement.appendChild(spanWeatherElement);

                    divElementForecasts.appendChild(spanSymbolElement);
                    divElementForecasts.appendChild(spanConditionElement);

                    currentDivElement.appendChild(divElementForecasts);
                    

                    fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${currTown.code}`)
                        .then(body => body.json())
                        .then(data => {
                            let symbol = '';
                            let divUpcomingElement = document.getElementById('upcoming');

                            console.log(data.forecast[0]);
                            let firstDay = data.forecast[0];
                            console.log(firstDay.condition);
                            console.log(data.forecast[1]);
                            let secondDay = data.forecast[1];
                            console.log(data.forecast[2]);
                            let thirdDay = data.forecast[2];

                            let divForecastInfo = document.createElement('div');
                            divForecastInfo.classList.add('forecast-info');

                            let spanUpcoming = document.createElement('span');
                            spanUpcoming.classList.add('upcoming');

                            let spanSymbolElement = document.createElement('span');
                            spanSymbolElement.classList.add('condition');
                            spanSymbolElement.classList.add('symbol');
                            switch (firstDay.condition) {
                                case 'Rain': symbol = "☂"; break;
                                case 'Sunny': symbol = "☀"; break;
                                case 'Partly sunny': symbol = "⛅"; break;
                                case 'Overcast': symbol = "☁"; break;
                            }
                            spanSymbolElement.textContent = symbol;

                            let spanDegreeElement = document.createElement('span');
                            spanDegreeElement.classList.add('forecast-data');
                            spanDegreeElement.textContent = `${firstDay.low}°/${firstDay.high}°`;
                            let spanWeatherElement = document.createElement('span');
                            spanWeatherElement.classList.add('forecast-data');
                            spanWeatherElement.textContent = `${firstDay.condition}`;

                            spanUpcoming.appendChild(spanSymbolElement);
                            spanUpcoming.appendChild(spanDegreeElement);
                            spanUpcoming.appendChild(spanWeatherElement);

                            let spanUpcoming2 = document.createElement('span');
                            spanUpcoming2.classList.add('upcoming');

                            let spanSymbolElement2 = document.createElement('span');
                            spanSymbolElement2.classList.add('condition');
                            spanSymbolElement2.classList.add('symbol');
                            switch (secondDay.condition) {
                                case 'Rain': symbol = "☂"; break;
                                case 'Sunny': symbol = "☀"; break;
                                case 'Partly sunny': symbol = "⛅"; break;
                                case 'Overcast': symbol = "☁"; break;
                            }
                            spanSymbolElement2.textContent = symbol;

                            let spanDegreeElement2 = document.createElement('span');
                            spanDegreeElement2.classList.add('forecast-data');
                            spanDegreeElement2.textContent = `${secondDay.low}°/${secondDay.high}°`;
                            let spanWeatherElement2 = document.createElement('span');
                            spanWeatherElement2.classList.add('forecast-data');
                            spanWeatherElement2.textContent = `${secondDay.condition}`;

                            spanUpcoming2.appendChild(spanSymbolElement2);
                            spanUpcoming2.appendChild(spanDegreeElement2);
                            spanUpcoming2.appendChild(spanWeatherElement2);

                            let spanUpcoming3 = document.createElement('span');
                            spanUpcoming3.classList.add('upcoming');

                            let spanSymbolElement3 = document.createElement('span');
                            spanSymbolElement3.classList.add('condition');
                            spanSymbolElement3.classList.add('symbol');
                            switch (thirdDay.condition) {
                                case 'Rain': symbol = "☂"; break;
                                case 'Sunny': symbol = "☀"; break;
                                case 'Partly sunny': symbol = "⛅"; break;
                                case 'Overcast': symbol = "☁"; break;
                            }
                            spanSymbolElement3.textContent = symbol;

                            let spanDegreeElement3 = document.createElement('span');
                            spanDegreeElement3.classList.add('forecast-data');
                            spanDegreeElement3.textContent = `${thirdDay.low}°/${thirdDay.high}°`;
                            let spanWeatherElement3 = document.createElement('span');
                            spanWeatherElement3.classList.add('forecast-data');
                            spanWeatherElement3.textContent = `${thirdDay.condition}`;

                            spanUpcoming3.appendChild(spanSymbolElement3);
                            spanUpcoming3.appendChild(spanDegreeElement3);
                            spanUpcoming3.appendChild(spanWeatherElement3);

                            divForecastInfo.appendChild(spanUpcoming);
                            divForecastInfo.appendChild(spanUpcoming2);
                            divForecastInfo.appendChild(spanUpcoming3);
                            divUpcomingElement.appendChild(divForecastInfo);


                        })


                })
        })
        .catch(err => {
            let error = document.createElement('h2');
                error.textContent = "Error";
                error.style.textAlign = 'center';
                let divForecast = document.getElementById('forecast');
                divForecast.style.display = 'block';
                divForecast.appendChild(error);
                
        })
}

attachEvents();