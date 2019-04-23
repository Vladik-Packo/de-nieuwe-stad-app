
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
