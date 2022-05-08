const dayOfWeekName = new Date().toLocaleString( // Use this to get the day of the week
    'default', {weekday: 'long'}
  );

const today = new Date()
const fullDate = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();

document.querySelector('.dayOfWeek').innerHTML = dayOfWeekName;
document.querySelector('.currentDate').innerHTML = fullDate;
document.querySelector('button').addEventListener('click', getWeather)

function getWeather(){

    let zip = document.querySelector('input').value

    fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=7b0f2c120e4676f27d74c46d2b0a2394&units=imperial`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.list)
      document.querySelector('h1').innerText = data.city.name
      document.querySelector('.real-temp').innerText = data.list[0].main.temp + '°'
      document.querySelector('.real-feel').innerText = data.list[0].main.feels_like + '°'
      
      document.querySelector('.humidity').innerText = data.list[0].main.humidity + '%'  
      document.querySelector('.high-temp').innerText = data.list[0].main.temp_max + '°'   
      document.querySelector('.low-temp').innerText = data.list[0].main.temp_min + '°' 
      document.querySelector('.weather').innerText = data.list[0].weather[0].description.toUpperCase()  
      document.querySelector('.conditionsnextday').innerText = data.list[6].weather[0].description.toUpperCase()
      document.querySelector('.conditionstwodays').innerText = data.list[14].weather[0].description.toUpperCase()
      document.querySelector('.high-twenty-four').innerText = data.list[9].main.temp_max + '°'  
      document.querySelector('.low-twenty-four').innerText = data.list[2].main.temp_min + '°'
      document.querySelector('.high-fourty').innerText = data.list[17].main.temp_max + '°'  
      document.querySelector('.low-fourty').innerText = data.list[14].main.temp_min + '°'               

      })
    .catch(err => {
        console.log(`error ${err}`)
    });
    

}


