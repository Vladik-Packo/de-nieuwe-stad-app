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

function Events() {
    getJSON('http://192.168.1.107:8000/api/events',
        function(err, data) {
            if (err !== null) {
                alert('Something went wrong: ' + err);
            } else {
                console.log(data);
                for (let v in data) {
                    for (let i = 0; i < data[v].length; i++) {
                        let date = new Date(data[v][i]['from']);
                        var hours = date.getHours();
                        var minutes = ('0' + date.getMinutes()).slice(-2);
                        var dd = ('0' + date.getDate()).slice(-2);
                        var m = date.getMonth()+1;
                        var mm = ('0' + m).slice(-2);
                        var yyyy = date.getFullYear();
                        var truedate = dd+'-'+mm+'-'+yyyy;
                        var truetime = hours+':'+minutes;
                        var title = (truedate == truedate) ? '' :  `<h5 class="white-text">` + truedate + `</h5>`;
                        console.log(hours+':'+minutes);

                        $('#eventinformation').append(`<br>` + title + `
                    
                    <li>
                    <div class="transparent collapsible-header border-buttons center-align white-text waves-effect waves-light waves-yellow btn-large text-flow" style="border-style: solid; border-width: 2px; border-color: whitesmoke;">` + truetime + ` ` + (data[v][i]['name']) + `</div>
                    <div class="white-text collapsible-body text-flow">` + (data[v][i]['info']) + `</div>
                    </li>`);

                    }
                    $(".flip").click(function () {
                        $(this).parent().find(".panel").slideToggle("fast");
                    });
                }
            }
    });
}
Events();