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
console.log('ttest');
function test() {
    //verander dit in je ip & en zoek een open port op (netstat -a -b)
    getJSON('http://145.120.199.92/api/businesses',
        function(err, data) {
        console.log('1');
            if (err !== null) {
                alert('Something went wrong: ' + err);
            } else {
                for (let i = 0; i < data.length; i++) {
                    
                    //console.log(data[0][i].business);
                    //console.log(data);
                    console.log(data[0]['name']);
                    console.log(data.length + "  222");

                    let newDiv = document.createElement('div');
                    newDiv.className = "row";
                    document.getElementsByClassName("container")[1].appendChild(newDiv);

                    let divTitle = document.createElement('div');
                    divTitle.className = "col s12 waves-effect waves-light btn-large flip red darken-3";
                    document.getElementsByClassName('row')[i+1].appendChild(divTitle);
                    divTitle.innerHTML = data[i]['name'];
                    //console.log(data[0][i].business.name);

                    let divInfo = document.createElement('div');
                    divInfo.className = "col s12 flow-text panel grey lighten-2 z-depth-1";
                    document.getElementsByClassName('row')[i+1].appendChild(divInfo);
                    //divInfo.innerHTML = data[0][i].business.information;

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