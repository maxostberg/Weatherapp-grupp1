import DataWeather from './data.js'

class UI{
    static renderToDom(){
        /* function that returns the searched data */
        function searchedData(){
            const input = document.querySelector('.search-city');
            const dataFromInputValue = DataWeather.getWeatherData(input.value);
            return dataFromInputValue;
        }
        /***************************************************/

        /* main function, form submit */
        const cityForm = document.querySelector('.city-form');

        cityForm.addEventListener('submit', mainEvent);

        function mainEvent(event){
            event.preventDefault();
            
            cityTitle();
            weatherType();
            weatherData();
            dayData();
            daysSelection();

            let dayList = document.querySelector('.week-weather');
            dayList.innerHTML = '';
        }
        /****************************************************/

        /* Days eventlistener */
        function daysSelection(){
            const dayList = document.querySelector('.week-weather');

            dayList.addEventListener('click', daySelection)

            function daySelection(event){
                let li = event.target.closest('li')
                const weatherTypeDiv = document.querySelector('.weather-type');
                const weatherData = document.querySelector('.weather-data');
                
                
                if(event.target.classList.contains('week-weather')){
                    return;
                }
                if(li.classList.contains('li-one')){
                    searchedData().then((data) => {
                        weatherTypeDiv.innerHTML = weatherTypeHTML(data.list[7].weather[0].description);
                        weatherData.innerHTML = weatherDataHTML(data.list[7].main.temp, data.list[7].wind.speed, data.list[7].main.humidity)
                    })
                }
                if(li.classList.contains('li-two')){
                    searchedData().then((data) => {
                        weatherTypeDiv.innerHTML = weatherTypeHTML(data.list[15].weather[0].description)
                        weatherData.innerHTML = weatherDataHTML(data.list[15].main.temp, data.list[15].wind.speed, data.list[15].main.humidity)
                    })
                }
                if(li.classList.contains('li-three')){
                    searchedData().then((data) => {
                        weatherTypeDiv.innerHTML = weatherTypeHTML(data.list[23].weather[0].description)
                        weatherData.innerHTML = weatherDataHTML(data.list[23].main.temp, data.list[23].wind.speed, data.list[23].main.humidity)
                    })
                }
                if(li.classList.contains('li-four')){
                    searchedData().then((data) => {
                        weatherTypeDiv.innerHTML = weatherTypeHTML(data.list[31].weather[0].description)
                        weatherData.innerHTML = weatherDataHTML(data.list[31].main.temp, data.list[31].wind.speed, data.list[31].main.humidity)
                    })
                }
                if(li.classList.contains('li-five')){
                    searchedData().then((data) => {
                        weatherTypeDiv.innerHTML = weatherTypeHTML(data.list[39].weather[0].description)
                        weatherData.innerHTML = weatherDataHTML(data.list[39].main.temp, data.list[39].wind.speed, data.list[39].main.humidity)
                    })
                }
                
            }
        }
        /******************************************************/

        /* HTML FUNCTIONS */
        function weatherTypeHTML(weatherInfo){
            let html = `
                <i class="fas fa-cloud img-one"></i>
                <p class="weather-info">${weatherInfo}</p>
            `;
            return html;
        }

        function weatherDataHTML(temp, wind, humidity){
            let html = `
                <h1 class="degrees">${temp}&deg;</h1>
                <ul class="weather-data-list">
                    <li class="data wind">
                        <i class="fas fa-wind"></i>
                        <p class="data-text wind">${wind}mph</p>
                    </li>
                    <li class="data humidity">
                        <i class="fas fa-smog"></i>
                        <p class="data-text humidity">${humidity}%</p>
                    </li>
                </ul>
            `;
            return html;
        }

        function daysOfWeekHTML(high, low, weekday){
            let html = `
                <li class="day-weather">
                    <i class="fas fa-cloud-sun img-days"></i>
                    <p class="highest-lowest">${high}/${low}</p>
                    <p class="day-text">${weekday}</p>
                </li>
            `;
            return html;
        }

        /********************************************************/
        /* Small functions that goes into form submit function */
        function cityTitle(){
            searchedData().then((data) => {
                const cityTitleName = document.querySelector('.city-name');
                cityTitleName.textContent = data.city.name;
            })
        }

        function weatherType(){
            searchedData().then((data) => {
                const weatherTypeDiv = document.querySelector('.weather-type');
                weatherTypeDiv.innerHTML = weatherTypeHTML(data.list[0].weather[0].description);
            })
        }

        function weatherData(){
            searchedData().then((data) => {
                const weatherData = document.querySelector('.weather-data');
                weatherData.innerHTML = weatherDataHTML(data.list[0].main.temp, data.list[0].wind.speed, data.list[0].main.humidity)
            })
        }

        function dayData(){
            searchedData().then((data) => {
                let weekList = document.querySelector('.week-weather');
                for(let i = 0; i <= 4; i++){
                    if(i == 0){
                        weekList.innerHTML += daysOfWeekHTML(data.list[7].main.temp_max, data.list[7].main.temp_min, data.list[7].dt_txt)
                        const li = document.querySelector('.day-weather');
                        li.classList.add('li-one');
                    }
                    if(i == 1){
                        weekList.innerHTML += daysOfWeekHTML(data.list[15].main.temp_max, data.list[15].main.temp_min, data.list[15].dt_txt)
                        const li = document.querySelector('.day-weather');
                        li.nextElementSibling.classList.add('li-two')
                    }
                    if(i == 2){
                        weekList.innerHTML += daysOfWeekHTML(data.list[23].main.temp_max, data.list[23].main.temp_min, data.list[23].dt_txt)
                        const li = document.querySelector('.day-weather');
                        li.nextElementSibling.nextElementSibling.classList.add('li-three');
                    }
                    if(i == 3){
                        weekList.innerHTML += daysOfWeekHTML(data.list[31].main.temp_max, data.list[31].main.temp_min, data.list[31].dt_txt)
                        const li = document.querySelector('.day-weather');
                        li.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('li-four');
                    }
                    if(i == 4){
                        weekList.innerHTML += daysOfWeekHTML(data.list[39].main.temp_max, data.list[39].main.temp_min, data.list[39].dt_txt)
                        const li = document.querySelector('.day-weather');
                        li.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('li-five');
                    }
                }
            }) 
        }
        /******************************************************************************************************************************************/

        /* Functions that goes with event listener on the list of days */

    }


}

export default UI;