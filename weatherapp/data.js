import apiData from './API.js';

class DataWeather{
    static getWeatherData(city){
        apiData.location = city;
        let fetchData = fetch(apiData.apiAdress(apiData.location, apiData.apiKey)).then((res) => res.json())
        return fetchData;
    }
}

export default DataWeather