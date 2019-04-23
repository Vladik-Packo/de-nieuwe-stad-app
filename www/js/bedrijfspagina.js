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

function test(str) {
    getJSON('http://127.0.0.1/test',
        function(err, data) {




            if (err !== null) {
                alert('Something went wrong: ' + err);
            } else {
                for (let i = 0; i < data[0].length; i++) {
                    console.log(data[0][i].business);


                    let newDiv = document.createElement('div');
                    newDiv.className = "row";
                    document.getElementsByClassName("container")[i].appendChild(newDiv);

                    let divTitle = document.createElement('div');
                    divTitle.className = "col s12 waves-effect waves-light btn-large flip red darken-3";
                    document.getElementsByClassName('row')[i].appendChild(divTitle);
                    divTitle.innerHTML = data[0][i].business.name;

                    let divInfo = document.createElement('div');
                    divInfo.className = "col s12 flow-text panel grey lighten-2 z-depth-1";
                    document.getElementsByClassName('row')[i].appendChild(divInfo);
                    divInfo.innerHTML = data[0][i].business.information + "<br><br>lol";

                    let moreInfo = document.createElement('a');
                    moreInfo.href="#";
                    moreInfo.innerHTML = "<br> link";
                    document.getElementsByClassName('col s12 flow-text panel grey lighten-2 z-depth-1')[i].appendChild(moreInfo);

            }

                $(".flip").click(function(){
                    $(this).parent().find(".panel").slideToggle("fast");
                });

        }

        });
}