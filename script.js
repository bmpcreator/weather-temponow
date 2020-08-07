let appId = '13e75baba9704bd28554d3e69f40c4e0';
let appId2 = 'f6cc1cd0fcab4dffb1c213812200508';
let units = 'M';
let searchMethod;

function getSearchMethod(searchTerm){
    if(searchTerm.length === 4 && Number.parseInt(searchTerm)+''=== searchTerm){
        searchMethod = 'zip';
    }else{
            searchMethod = '';
        
    }
}

function searchWeather(searchTerm){
    getSearchMethod(searchTerm);
    fetch(`http://api.weatherapi.com/v1/current.json?key=${appId2}&q=${searchTerm}&lang=pt`).then(result =>{
        return result.json();
    }).then(result =>{
        init(result);
    })
  
}

function forecastDaily(searchTerm){
    getSearchMethod(searchTerm);
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${appId2}&q=${searchTerm}&days=9&lang=pt`).then(result =>{
    //http://api.weatherapi.com/v1/forecast.json?key=${appId2}&q=${searchTerm}=9&lang=pt   
    //https://api.weatherbit.io/v2.0/forecast/daily?city=${searchTerm}&key=${appId}&lang=pt
    
    return result.json();
    }).then(result =>{
        init2(result);
    })
  
}

function forecastDaily2(searchTerm){
    getSearchMethod(searchTerm);
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${searchTerm}&key=${appId}&lang=pt`).then(result =>{
    //http://api.weatherapi.com/v1/forecast.json?key=${appId2}&q=${searchTerm}=9&lang=pt   
    //https://api.weatherbit.io/v2.0/forecast/daily?city=${searchTerm}&key=${appId}&lang=pt
    
    return result.json();
    }).then(result =>{
        init3(result);
    })
  
}

function init3(resultFromServer){
    console.log(resultFromServer);

    let tempMaxElement3 = document.getElementById('tempMax3');
    let tempMinElement3 = document.getElementById('tempMin3');
    let tempoElement3 = document.getElementById('tempo3');
    let diaElement3 = document.getElementById('dia3');

    let tempMaxElement4 = document.getElementById('tempMax4');
    let tempMinElement4 = document.getElementById('tempMin4');
    let tempoElement4 = document.getElementById('tempo4');
    let diaElement4 = document.getElementById('dia4');

    let tempMaxElement5 = document.getElementById('tempMax5');
    let tempMinElement5 = document.getElementById('tempMin5');
    let tempoElement5 = document.getElementById('tempo5');
    let diaElement5 = document.getElementById('dia5');

    let tempMaxElement6 = document.getElementById('tempMax6');
    let tempMinElement6 = document.getElementById('tempMin6');
    let tempoElement6 = document.getElementById('tempo6');
    let diaElement6 = document.getElementById('dia6');

    let tempMaxElement7 = document.getElementById('tempMax7');
    let tempMinElement7 = document.getElementById('tempMin7');
    let tempoElement7 = document.getElementById('tempo7');
    let diaElement7 = document.getElementById('dia7');

    tempMaxElement3.innerHTML = 'Temp. Max.: ' + Math.floor(resultFromServer.data[3].max_temp) + '&#176'+' C';
    tempMinElement3.innerHTML = 'Temp. Min.: ' + Math.floor(resultFromServer.data[3].min_temp) + '&#176'+' C';
    tempoElement3.innerHTML = resultFromServer.data[3].weather.description;
    diaElement3.innerHTML = "No dia: "+resultFromServer.data[3].valid_date.split('-').reverse().join('/');

    tempMaxElement4.innerHTML = 'Temp. Max.: ' + Math.floor(resultFromServer.data[4].max_temp) + '&#176'+' C';
    tempMinElement4.innerHTML = 'Temp. Min.: ' + Math.floor(resultFromServer.data[4].min_temp) + '&#176'+' C';
    tempoElement4.innerHTML = resultFromServer.data[4].weather.description;
    diaElement4.innerHTML = "No dia: "+resultFromServer.data[4].valid_date.split('-').reverse().join('/');

    tempMaxElement5.innerHTML = 'Temp. Max.: ' + Math.floor(resultFromServer.data[5].max_temp) + '&#176'+' C';
    tempMinElement5.innerHTML = 'Temp. Min.: ' + Math.floor(resultFromServer.data[5].min_temp) + '&#176'+' C';
    tempoElement5.innerHTML = resultFromServer.data[5].weather.description;
    diaElement5.innerHTML = "No dia: "+resultFromServer.data[5].valid_date.split('-').reverse().join('/');

    tempMaxElement6.innerHTML = 'Temp. Max.: ' + Math.floor(resultFromServer.data[6].max_temp) + '&#176'+' C';
    tempMinElement6.innerHTML = 'Temp. Min.: ' + Math.floor(resultFromServer.data[6].min_temp) + '&#176'+' C';
    tempoElement6.innerHTML = resultFromServer.data[6].weather.description;
    diaElement6.innerHTML = "No dia: "+resultFromServer.data[6].valid_date.split('-').reverse().join('/');

    tempMaxElement7.innerHTML = 'Temp. Max.: ' + Math.floor(resultFromServer.data[7].max_temp) + '&#176'+' C';
    tempMinElement7.innerHTML = 'Temp. Min.: ' + Math.floor(resultFromServer.data[7].min_temp) + '&#176'+' C';
    tempoElement7.innerHTML = resultFromServer.data[7].weather.description;
    diaElement7.innerHTML = "No dia: "+resultFromServer.data[7].valid_date.split('-').reverse().join('/');
}

function init2(resultFromServer){
   console.log(resultFromServer);

    
    let tempMaxElement0 = document.getElementById('tempMax');
    let tempMinElement0 = document.getElementById('tempMin');
    let tempoElement0 = document.getElementById('tempo');
    let diaElement0 = document.getElementById('dia');
    let rainChanceElement0 = document.getElementById('chancedechuva');
 
    let tempMaxElement1 = document.getElementById('tempMax1');
    let tempMinElement1 = document.getElementById('tempMin1');
    let tempoElement1 = document.getElementById('tempo1');
    let diaElement1 = document.getElementById('dia1');
    let rainChanceElement1 = document.getElementById('chancedechuva1');

    let tempMaxElement2 = document.getElementById('tempMax2');
    let tempMinElement2 = document.getElementById('tempMin2');
    let tempoElement2 = document.getElementById('tempo2');
    let diaElement2 = document.getElementById('dia2');
    let rainChanceElement2 = document.getElementById('chancedechuva2');

    

   

    tempMaxElement0.innerHTML = 'Temp. Max.: ' + Math.floor((resultFromServer.forecast.forecastday[0].day.maxtemp_c)+1) + '&#176'+' C';
    tempMinElement0.innerHTML = 'Temp. Min.: ' + Math.floor(resultFromServer.forecast.forecastday[0].day.mintemp_c) + '&#176'+' C';
    diaElement0.innerHTML = resultFromServer.forecast.forecastday[0].date.split('-').reverse().join('/')+ ' - Hora local: '+resultFromServer.location.localtime.slice(11);
    rainChanceElement0.innerHTML = 'Chance de chuva: '+resultFromServer.forecast.forecastday[0].day.daily_chance_of_rain + '%';
 
    tempMaxElement1.innerHTML = 'Temp. Max.: ' + Math.floor((resultFromServer.forecast.forecastday[1].day.maxtemp_c)+1) + '&#176'+' C';
    tempMinElement1.innerHTML = 'Temp. Min.: ' + Math.floor(resultFromServer.forecast.forecastday[1].day.mintemp_c) + '&#176'+' C';
    tempoElement1.innerHTML = resultFromServer.forecast.forecastday[1].day.condition.text;
    diaElement1.innerHTML = "No dia: "+ resultFromServer.forecast.forecastday[1].date.split('-').reverse().join('/');

    tempMaxElement2.innerHTML = 'Temp. Max.: ' + Math.floor((resultFromServer.forecast.forecastday[2].day.maxtemp_c)+1) + '&#176'+' C';
    tempMinElement2.innerHTML = 'Temp. Min.: ' + Math.floor(resultFromServer.forecast.forecastday[2].day.mintemp_c) + '&#176'+' C';
    tempoElement2.innerHTML = resultFromServer.forecast.forecastday[2].day.condition.text;
    diaElement2.innerHTML = "No dia: "+resultFromServer.forecast.forecastday[2].date.split('-').reverse().join('/');

    setPositionForWeatherInfo2();
 
}

function setPositionForWeatherInfo2(){
    let weatherforecast = document.getElementById('weatherForecast');
    let weatherforecastHeight = weatherforecast.clientHeight;
    let weatherforecastWidth = weatherforecast.clientWidth;

    weatherforecast.style.left = `calc(85% - ${weatherforecastWidth/2}px)`;
    weatherforecast.style.top = `calc(70% - ${weatherforecastHeight/2}px)`;
    weatherforecast.style.visibility = 'visible';

}

function init(resultFromServer){

    console.log(resultFromServer);
    
        switch (resultFromServer.current.condition.text) {
            case 'Sol':
                document.body.style.backgroundImage = 'url("solzao.jpg")';  
                break;
            case 'Céu limpo':
                document.body.style.backgroundImage = 'url("ceulimpo.jpg")';
                break;
            case 'Poucas nuvens':
                document.body.style.backgroundImage = 'url("poucas nuvens.jpg")';
                break;
                case 'Nublado':
                case 'Parcialmente nublado':
                case 'Encoberto':
                document.body.style.backgroundImage = 'url("nublado.jpg")';
                break;

            case 'Aguaceiros fracos':
            case 'Aguaceiros moderados ou fortes':
                case 'Chuva moderada':
                    case 'Chuva forte':
                    case 'Aguaceiros moderados ou fortes':
            document.body.style.backgroundImage = 'url("chuva.jpg")';
            break;
            case 'Tempestade':
            case 'Tempestade com chuva forte':
            case 'Tempestade com chuva':
            case 'Aguaceiro forte':
            case 'Chuva moderada ou forte com trovoada':
            document.body.style.backgroundImage = 'url("tempestade.jpg")';
                break;
            case 'Neve':
            case 'Mistura neve/chuva':
            case 'Queda de neve fraca':
            document.body.style.backgroundImage = 'url("neve2.jpg")';
                break;
                case 'Neblina':
            document.body.style.backgroundImage = 'url("neblina.jpg")';
                break;
            case 'Chuva fraca irregular com trovoada':
                document.body.style.backgroundImage = 'url("trovoada.jpg")';
            break;
        default: 
            break;
            
    }
   
    let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
    let temperatureElement = document.getElementById('temperature');
    let humidityElement = document.getElementById('humidity');
    let windSpeedElement = document.getElementById('windSpeed');
    let timeZoneElement = document.getElementById('timeZone');
    let cityHeader = document.getElementById('cityHeader');
    let weatherIcon = document.getElementById('documentIconImg');
    let countryNameElement = document.getElementById('countryName');
    let estadoNameElement = document.getElementById('estado');
    var nivelUmidade ='0';
    if(resultFromServer.current.humidity<50){
        nivelUmidade = "(Ar seco)";
    }else if(resultFromServer.current.humidity<70){
        nivelUmidade = "(Ideal)";
    }else{
        nivelUmidade="(Muito umido)";
    }

    weatherIcon.src = resultFromServer.current.condition.icon;
let resultDescription = resultFromServer.current.condition.text;
weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);
temperatureElement.innerHTML = Math.floor(resultFromServer.current.temp_c) + '&#176'+' C - ';
windSpeedElement.innerHTML = 'Velocidade dos ventos: ' + resultFromServer.current.wind_kph +' km/h';
cityHeader.innerHTML = resultFromServer.location.name;
countryNameElement.innerHTML = resultFromServer.location.country;
humidityElement.innerHTML = 'Nivel de umidade: ' + resultFromServer.current.humidity + '% '+nivelUmidade;
estadoNameElement.innerHTML = 'Estado: '+resultFromServer.location.region;
//timeZoneElement.innerHTML = 'Hora local: '+resultFromServer.location.localtime.slice(11);
    setPositionForWeatherInfo();
}

function setPositionForWeatherInfo(){
    let weatherContainer = document.getElementById('weatherContainer');
    let weatherContainerHeight = weatherContainer.clientHeight;
    let weatherContainerWidth = weatherContainer.clientWidth;

    weatherContainer.style.left = `calc(50% - ${weatherContainerWidth/2}px)`;
    weatherContainer.style.top = `calc(50% - ${weatherContainerHeight/2}px)`;
    weatherContainer.style.visibility = 'visible';
}

document.getElementById('searchBtn').addEventListener('click',() => {
    let searchTerm = document.getElementById('searchInput').value;
    if(searchTerm){
    searchWeather(searchTerm);
    forecastDaily(searchTerm);
    forecastDaily2(searchTerm);
    }
})



