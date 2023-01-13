document.onkeyup = function(e) {
    if(e.ctrlKey && e.shiftKey && e.which == 81) {
        window.open('dev.html', _self, false);
    }
}

alert(location.pathname);