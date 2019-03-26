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