var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&appid=55838ae1992975e39fe364d4c0e5deb7'

// Browser Fetch Method
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].main.temp);
        console.log(data[i].name);
        console.log(data[i].coord.lon);
      }
    });
  