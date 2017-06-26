// get user's geolocation after the page loads.
$(document).ready(getLocation);

function getLocation() {
    if (Modernizr.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, handleError, {maximumAge:60000});
    } else {
        $("#demo").html("Geolocation is not supported by this browser.");
    }
};

function showPosition(position) {
    $.ajax({
        url : 'http://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+
        '&lon='+position.coords.longitude+'&units=metric&APPID=8358bc42c15eda8db8d9eaf905a2086b',
        success : function(data) {
        $("#weather").text(data.weather[0].main);
        $("#temp").text(Math.round(data.main.temp));
        $("#city").text(data.name+", ");
        $("#country").text(data.sys.country);
        switch(data.weather[0].main) {
            case 'Clouds':
                $('#icon').html('<div class="icon cloudy"><div class="cloud"></div><div class="cloud"></div></div>');
                break;
            case 'Rain':
            case 'Drizle':
                $('#icon').html('<div class="icon rainy"><div class="cloud"></div><div class="rain"></div></div>');
                break;
            case 'Clear':
                $('#icon').html('<div class="icon sunny"><div class="sun"><div class="rays"></div></div></div>');
                break;
            case 'Snow':
                $('#icon').html('<div class="icon flurries"><div class="cloud"></div><div class="snow">\
                <div class="flake"></div><div class="flake"></div></div></div>');
                break;
            case 'Thunderstorm':
            case 'Extreme':
                $('#icon').html('<div class="icon thunder-storm"><div class="cloud"></div><div class="lightning">\
                <div class="bolt"></div><div class="bolt"></div></div></div>');
                break;
        }
        },
    cache : false
    });
};

function handleError(error) {
  if (error.code == 1) {
    alert("You disallowed tracking your location")
  }
  else if (error.code == 2) {
    alert("Your network is down or the positioning satelites cannot be contacted")
  }
  else if (error.code == 3) {
    alert("It takes too long to calculate your position. Please try again later")
  }
};

function changeTemp(celsius, farenheit) {
    var farenheit = Math.round($('#temp').text()*1.8 + 32);
    var celsius = Math.round(($('#temp').text() - 32)/1.8);
    if ($('#tempUnits').text() === 'C') {
        $('#tempUnits').text('F');
        $('#temp').text(farenheit);
    } else {
        $('#tempUnits').text('C');
        $('#temp').text(celsius);
    };
};

