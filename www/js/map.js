// var getJSON = function(url, callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.responseType = 'json';
//     xhr.onload = function() {
//         var status = xhr.status;
//         if (status === 200) {
//             callback(null, xhr.response);
//         } else {
//             callback(status, xhr.response);
//         }
//     };
//     xhr.send();
// };
//
// function test() {
//     getJSON('http://145.120.199.7/mappoint',
//         function(err, data) {
//
//             if (err !== null) {
//                 alert('Something went wrong: ' + err);
//             } else {
//                 for (let i = 0; i < data[0].length; i++) {
//                     console.log(data);
//
//
//                 }
//             }
//         });
// }

let data;






var mapid = document.getElementById('mapid');
console.log(mapid);
mapid.style.fill = "red";
//console.log(geolocation.getCurrentPosition);


var gpsX;
var gpsY;
function gpspoints() {
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
        var point2 = document.getElementById('point2');

        var loc = document.getElementById('loc');

        var gx1 = 52.16105;
        var gy1 = 5.37796;

        var gx2 = 52.16043;
        var gy2 = 5.38119;

        var kx1 = kX/5;
        var ky1 = kY/4;

        var kx2 = kX/2;
        var ky2 = kY/2;

        var gpsx = 52.15996;
        var gpsy = 5.379383;


        // Berekening locatie op map
        // g = google locatie
        // gpsX & gpsY = gsm locatie
        // k = plattegrond
        // n = nieuwe punt
        //
        // Kx1+(gpsX-Gx1)*(Kx2-Kx1)/(Gx2-Gx1) = nx
        // Ky1+(gpsY-Gy1)*(Ky2-Ky1)/(Gy2-Gy1) = ny

        var nx = kx1+(gpsx-gx1)*(kx2-kx1)/(gx2-gx1);
        var ny = ky1+(gpsy-gy1)*(ky2-ky1)/(gy2-gy1);

        loc.style.left = nx + "px";
        loc.style.top = ny + "px";

        console.log(nx + ' nx');
        console.log(kx1 + ' kx1');
        console.log(kx2 + ' okx2');




        point.style.left = kX/5 + "px"; // == 52.16105
        point.style.top = kY/4 + "px"; // == 5.37796

        point2.style.left = kX/2 + "px"; // == 52.16043
        point2.style.top = kY/2 + "px"; // == 5.38119

        var test = console.log(width);

    };
}

    // Code to get coordinates of image
    var elmids = ['map'];

    var x, y = 0;       // variables that will contain the coordinates

// Get X and Y position of the elm (from: vishalsays.wordpress.com)
    function getXYpos(elm) {
        x = elm.offsetLeft;        // set x to elm’s offsetLeft
        y = elm.offsetTop;         // set y to elm’s offsetTop

        elm = elm.offsetParent;    // set elm to its offsetParent

        //use while loop to check if elm is null
        // if not then add current elm’s offsetLeft to x
        //offsetTop to y and set elm to its offsetParent
        while(elm != null) {
            x = parseInt(x) + parseInt(elm.offsetLeft);
            y = parseInt(y) + parseInt(elm.offsetTop);
            elm = elm.offsetParent;
        }

        // returns an object with "xp" (Left), "=yp" (Top) position
        return {'xp':x, 'yp':y};
    }

// Get X, Y coords, and displays Mouse coordinates
    function getCoords(e) {
        var xy_pos = getXYpos(this);

        // if IE
        if(navigator.appVersion.indexOf("MSIE") != -1) {
            // in IE scrolling page affects mouse coordinates into an element
            // This gets the page element that will be used to add scrolling value to correct mouse coords
            var standardBody = (document.compatMode == 'CSS1Compat') ? document.documentElement : document.body;

            x = event.clientX + standardBody.scrollLeft;
            y = event.clientY + standardBody.scrollTop;
        }
        else {
            x = e.pageX;
            y = e.pageY;
        }

        x = x - xy_pos['xp'];
        y = y - xy_pos['yp'];

        // displays x and y coords in the #coords element
        //document.getElementById('coords').innerHTML = 'X= '+ x+ ' ,Y= ' +y;
        //console.log('X= '+ x+ ' ,Y= ' +y);
    }

    let xm;
    let ym;


// register onmousemove, and onclick the each element with ID stored in elmids
    for(var i=0; i<elmids.length; i++) {
        if(document.getElementById(elmids[i])) {
            // calls the getCoords() function when mousemove
            document.getElementById(elmids[i]).onmousemove = getCoords;

            // execute a function when click
            document.getElementById(elmids[i]).onclick = function() {
                //document.getElementById('regcoords').value = x+ ' , ' +y;
                mapX = document.getElementById('map').offsetWidth;
                mapY = document.getElementById('map').offsetHeight;
                xm = x / mapX;
                ym = y / mapY;


                console.log(xm + ' , ' + ym);
            };
        }
    }

horeca = document.getElementsByClassName('horeca');

    function makeMap(data) {
    var mapX = document.getElementById('map').offsetWidth;
    var mapY = document.getElementById('map').offsetHeight;

    let z = mapX / mapY;

    console.log(mapX);
    console.log(mapY);
    console.log(mapX / mapY);
    console.log(mapY * z);
    for (i = 0; i < horeca.length; i++) {
        horeca[i].style.width = mapX / 55 + "px";
        horeca[i].style.height = mapX / 55 + "px";
        horeca[i].style.borderRadius = "100%";
        horeca[i].style.backgroundColor = "green";
    }

    let points = [
            {x: 0.40457413249211355 , y: 0.24399260628465805 },
            {x: 0.444794952681388 , y: 0.24214417744916822 },
            {x: 0.526813880126183 , y: 0.4879852125693161 },
            {x: 0.6017350157728707 , y: 0.7060998151571165 },
            {x: 0.5757097791798107 , y: 0.7523105360443623 },
            {x: 0.7342271293375394 , y: 0.7948243992606284 }
        ];

    for (let p of points) {

    }
    //console.log(points[0].x);
    //points[0].x / mapX;

    horeca[0].style.left = points[0].x * mapX + "px";
    horeca[0].style.top = points[0].y * mapY + "px";
    //horeca[0].onclick = expand(0);

    horeca[1].style.left = points[1].x * mapX + "px";
    horeca[1].style.top = points[1].y * mapY + "px";

    horeca[2].style.left = points[2].x * mapX + "px";
    horeca[2].style.top =  points[2].y * mapY + "px";

    horeca[3].style.left = points[3].x * mapX + "px";
    horeca[3].style.top =  points[3].y * mapY + "px";

    horeca[4].style.left = points[4].x * mapX + "px";
    horeca[4].style.top =  points[4].y * mapY + "px";

    horeca[5].style.left = points[5].x * mapX + "px";
    horeca[5].style.top =  points[5].y * mapY + "px";



}
// console.log(horeca.length + " hooreekaa");
//     horeca[0].onclick = function() {
//         console.log("yadidyada")
//     };
//
//
//     for (i = 0; i < horeca.length; i++) {
//         horeca[i].onclick = function () {
//             console.log("horeca bedrijf: " + horeca[i-1]);
//             horeca[i-1].style.backgroundColor = "black";
//         }
//     }
//
//         horeca.onclick = function () {
//             console.log("horeca bedrijf: ");
//         }

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.collapsible');
//     var instances = M.Collapsible.init(elems, accordion);
// });

function expand(n) {
    console.log(n + "yeeettt" + data);

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


        getJSON('http://groep4.rocole.nl/api/businesses/',
            function(err, data) {

                if (err !== null) {
                    alert('Something went wrong: ' + err);
                } else {
                    console.log(n);


                   // var coll = document.getElementsByClassName("collapsible");

                        let tgl = document.getElementById('toggle');
                        let tgl2 = document.getElementById('toggle2');
                        if (tgl.className === "active") {
                            tgl.className = "bleh";
                            tgl2.style.display = "none";
                        } else if (tgl.className === "bleh") {
                            tgl.className = "active";
                            tgl2.style.display = "inhered";
                        }


                        //this.classList.toggle("active");
                        // var content = this.nextElementSibling;
                        // if (content.style.maxHeight){
                        //     content.style.maxHeight = null;
                        // } else {
                        //     content.style.maxHeight = content.scrollHeight + "px";
                        // }
                    }


            });



}



//Allow zoom
var myElement = document.getElementById('myElement');

var mc = new Hammer.Manager(myElement);

// create a pinch and rotate recognizer
// these require 2 pointers
var pinch = new Hammer.Pinch();
var rotate = new Hammer.Rotate();

// we want to detect both the same time
pinch.recognizeWith(rotate);

// add to the Manager
mc.add([pinch, rotate]);


// mc.on("pinch rotate", function(ev) {
//     myElement.textContent += ev.type +" ";
//     console.log('testtt');
// });
// console.log(Hammer);

