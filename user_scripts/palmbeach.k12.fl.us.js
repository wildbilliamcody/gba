let isDistrict = window.location.href.includes("palmbeach.k12.fl.us");
if (isDistrict) {
    districtOpen();
}

function districtOpen() {
    var queryString = new URL(window.location).search;
document.querySelectorAll("[href]").forEach(link => {
    var current = link.href;
    link.href = current + "?palmbeach.k12.fl.us";
    console.log(link.href);
});
}
