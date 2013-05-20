document.onkeydown = openSearcher;
function openSearcher(e) {
    e = e || event;
    if (e.keyCode == 83) {
        alert("ctrl+s pressed");
    }
}

                    
