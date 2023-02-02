var isDistrict1 = window.location.href.includes("palmbeach.k12.fl.us");
if (isDistrict1) {
    districtOpen();
    districtOpen2();
    localStorage.setItem("district", "1");
}

function districtOpen() {
document.querySelectorAll("[href]").forEach(link => {
    var current = link.href;
    link.href = current + "?palmbeach.k12.fl.us";
    console.log(link.href);
});
}

function districtOpen2() {
    // Select all script and link elements
    const elements = document.querySelectorAll("script, link[rel='stylesheet']");
    
    elements.forEach(element => {
      if (element.tagName === 'SCRIPT') {
        // If the element is a script, update its src attribute
        element.src += "?palmbeach.k12.fl.us";
        console.log("WORKKK " + element.src);
      } else if (element.tagName === 'LINK') {
        // If the element is a link, update its href attribute
        element.href += "?palmbeach.k12.fl.us";
        console.log("WORKKK " + element.href);
      }
    });
  }
