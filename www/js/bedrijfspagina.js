function expand(infonmbr) {
    console.log('werkt');

    let infoclass = document.getElementsByClassName("info");

    if (infoclass[infonmbr].style.display == "none")
    {
        infoclass[infonmbr].style.display = "block";
    }
    else
    {
        infoclass[infonmbr].style.display = "none";
    }
}


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

function Business() {
    getJSON('http://groep4.rocole.nl/api/businesses',
        function(err, data) {

            if (err !== null) {
                alert('Something went wrong: ' + err);
            } else {
                for (let i = 0; i < data.length; i++) {


                    console.log( data[i] );

                    $( '#bedrijfcollapsible' ).append(`<br><li>
                    <div class="transparent border-buttons center-align white-text waves-effect waves-light waves-yellow btn-large text-flow collapsible-header" style="border-style: solid; border-width: 2px; border-color: whitesmoke;">` + (data[i]['name']) + `</div>
                    <div class="white-text text-flow collapsible-body">` + (data[i]['info']) + `</div>
                    <a href="` + (data[i]['website']) + `" class="center-align blue-text waves-effect waves-light waves-yellow text-flow collapsible-body">` + (data[i]['website']) + `</a>
                    </li>`);
            }
                $(".flip").click(function(){
                    $(this).parent().find(".panel").slideToggle("fast");
                });
        }
    });
}
Business();
