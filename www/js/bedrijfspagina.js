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

                    let newDiv = document.createElement('div');
                    newDiv.className = "row";
                    // document.getElementsByClassName("container")[i].appendChild(newDiv);

                    // let divTitle = document.createElement('div');
                    newDiv.className = "col s12 collapsible-header waves-effect waves-light waves-yellow btn-large transparent border-buttons";
                    document.getElementsByClassName('row')[i+1].appendChild(newDiv);
                    newDiv.innerHTML = data[i]['name'];
                    console.log(data[i]['name']);

                    // let divInfo = document.createElement('div');
                    // divInfo.className = "col s12 collapsible-body flow-text panel grey lighten-2 z-depth-1";
                    // document.getElementsByClassName('div')[i+1].appendChild(divInfo);
                    // divInfo.innerHTML = data[i]['info'];

                    // let moreInfo = document.createElement('a');
                    // moreInfo.href="#";
                    // moreInfo.innerHTML = "<br> link";
                    // document.getElementsByClassName('col s12 flow-text panel grey lighten-2 z-depth-1')[i].appendChild(moreInfo);

            }
                $(".flip").click(function(){
                    $(this).parent().find(".panel").slideToggle("fast");
                });
        }
    });
}
Business();