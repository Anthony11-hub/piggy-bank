var modal = document.getElementById('id01');

//when user clicks anywhere ouside the modal, close it
window.onclick = function(event) {
    if (event.target == modal){
        MediaCapabilities.style.display = "none";
    }
}