

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


var gpsX;
var gpsY;
function coordinaten() {


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
//     var kX = document.getElementById('map').offsetWidth;
//     var kY = document.getElementById('map').offsetHeight;

};


//leaflet
// var map = L.map('map', {
//     center: [51.505, -0.09],
//     zoom: 13
// });
var map = L.map('mapid').setView([52.15875, 5.37577], 18);
//18/52.16019/5.38028

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([52.15875, 5.37577]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

// var parser = new DOMParser();
// var doct = parser.parseFromString('../images/svgmap.svg', "image/svg+xml");

// var svgget = document.getElementById('svgmap');

//console.log(svgget);


// var parser = new DOMParser();
// var doc = parser.parseFromString('../images/svgmap.svg', "image/svg+xml");

var svgmap = document.getElementById('svgmap');

// var s = new XMLSerializer();
// var str = s.serializeToString(svgmap);


console.log(svgmap);


// var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
// svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
// svgElement.setAttribute('viewBox', "0 0 200 200");
// svgElement.innerHTML = '<rect width="200" height="200"/><rect x="75" y="23" width="50" height="50" style="fill:red"/><rect x="75" y="123" width="50" height="50" style="fill:#0013ff"/>';
var svgElementBounds = [ [ 52.162034, 5.375553 ], [ 52.159322, 5.385947 ] ];
L.svgOverlay(svgmap, svgElementBounds).addTo(map);

// linksboven 52.162034, 5.375553
// rechtsonder 52.159322, 5.385947
