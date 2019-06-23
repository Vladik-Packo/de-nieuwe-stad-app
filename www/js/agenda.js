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

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

function Events() {
    getJSON('http://groep4.rocole.nl/api/events',
        function(err, data) {
            if (err !== null) {
                alert('Something went wrong: ' + err);
            } else {
                console.log(data);
                for (let v in data) {
                    for (let i = 0; i < data[v].length; i++) {
                        let date = new Date(data[v][i]['from']);
                        let dateto = new Date(data[v][i]['to']);
                        var hoursto = dateto.getHours();
                        var minutesto = ('0' + dateto.getMinutes()).slice(-2);
                        var hours = date.getHours();
                        var minutes = ('0' + date.getMinutes()).slice(-2);
                        var dd = ('0' + date.getDate()).slice(-2);
                        var m = date.getMonth()+1;
                        var mm = ('0' + m).slice(-2);
                        var yyyy = date.getFullYear();
                        var truedate = dd+`/`+mm+`/`+yyyy;
                        var arr = [truedate];
                        // arr[i] = truedate;
                        var unique = arr.filter( onlyUnique );
                        var truetime = hours+':'+minutes;
                        var truetimeto = hoursto+':'+minutesto;
                        var uniquedate = [unique[i]];
                        uniquedate = uniquedate.filter( Boolean );

                        $('#eventinformation').append(`<br><h5 class="white-text">` + uniquedate + `</h5>

                    <li>
                    <div class="transparent collapsible-header border-buttons center-align white-text waves-effect waves-light waves-yellow btn-large text-flow" style="border-style: solid; border-width: 2px; border-color: whitesmoke;">` + truetime + ` tot `+ truetimeto + ` ` + (data[v][i]['name']) + `</div>
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
