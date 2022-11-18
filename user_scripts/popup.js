let doPopup = false;
let showAgain = true;
let showAgainStuffDat = localStorage.getItem("showAgainStuff");
if (showAgainStuffDat == "true") {
    let test123 = localStorage.getItem("showAgain");
    showAgain = JSON.parse(test123);
}
let showAgainStuff = JSON.parse(showAgainStuffDat);
if (/\bCrOS\b/.test(navigator.userAgent)) {
    doPopup = true;
} else {
    doPopup = false;
}


function surveyInitialize() {
    if (doPopup == true) {
        let userOS = 1;
        localStorage.setItem("userOS", JSON.stringify(userOS));
    }
    if (doPopup == false) {
        let userOS = 0;
        localStorage.setItem("userOS", JSON.stringify(userOS));
    }
}

function surveyBuild() {
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

function surveyCheck() {
    let userOS = JSON.parse(localStorage.getItem("userOS"));
    if (userOS == 1) {
      if (showAgain == true) {
        surveyBuild();
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
      }
    }
}
surveyCheck();
surveyInitialize();

function dontShowAgain() {
    let showAgain = false;
    showAgainStuff = true;
    localStorage.setItem("showAgainStuff", JSON.stringify(showAgainStuff));
    localStorage.setItem("showAgain", JSON.stringify(showAgain));
    var modal = document.getElementById("myModal");
        modal.style.display = "none";
}