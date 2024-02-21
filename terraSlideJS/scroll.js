
function scrollAbout(){
    var elementToView = document.getElementById('gifs');
    elementToView.scrollIntoView();
}

function scrollVer(){
    var elementToView = document.getElementById('version');
    elementToView.scrollIntoView({
        behavior: "smooth"
    });
}

function scrollGame(){
    var elementToView = document.getElementById('modes');
    elementToView.scrollIntoView({
        behavior: "smooth"
    });
}



