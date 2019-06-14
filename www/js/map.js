


var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

function test() {
    getJSON('http://145.120.199.7/mappoint',
        function(err, data) {

            if (err !== null) {
                alert('Something went wrong: ' + err);
            } else {
                for (let i = 0; i < data[0].length; i++) {
                    console.log(data);


                }
            }
        });
}


var mapid = document.getElementById('mapid');
console.log(mapid);
mapid.style.fill = "red";
//console.log(geolocation.getCurrentPosition);


var gpsX;
var gpsY;
document.getElementById("map").onload = function() {


    // Wait for Cordova to load
    //

    // get gps location
    document.addEventListener("deviceready", onDeviceReady, false);

    var watchID = null;

    // Cordova is ready
    //
    function onDeviceReady() {
        // Throw an error if no update is received every 30 seconds
        var options = { timeout: 30000 };
        watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
    }

    // onSuccess Geolocation
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
            'Longitude: ' + position.coords.longitude     + '<br />' +
            '<hr />'      + element.innerHTML;

        gpsX = position.coords.latitude;
        gpsY = position.coords.longitude;

    }




    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }



// get width and hight of svg
    var kX = document.getElementById('map').offsetWidth;
    var kY = document.getElementById('map').offsetHeight;
    var point = document.getElementById('point');





    // Berekening locatie op map
    // g = google locatie
    // gpsX & gpsY = gsm locatie
    // k = plattegrond
    // n = nieuwe punt
    //
    // Kx1+(gpsX-Gx1)*(Kx2-Kx1)/(Gx2-Gx1) = nx
    // Ky1+(gpsY-Gy1)*(Ky2-Ky1)/(Gy2-Gy1) = ny

    console.log(gpsX + " lel");


    //point.style.left = width/2 + "px";

    console.log(width);
    console.log(height);
    var test = console.log(width);

};