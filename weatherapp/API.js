let apiData = {
    apiKey: '5211fb97cabf9a5fc6c6f392920eab05',
    location: 'stockholm',
    apiAdress: function(location, apiKey){
        return `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`;
    }
}

export default apiData