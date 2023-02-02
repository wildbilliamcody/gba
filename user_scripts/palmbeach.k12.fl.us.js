const isDistrict1 = window.location.href.includes("palmbeach.k12.fl.us");
if (isDistrict1) {
    updateLinks("palmbeach.k12.fl.us");
    localStorage.setItem("district", "1");
}

function updateLinks(suffix) {
  // Select all elements with href or src attributes
  const elements = document.querySelectorAll("[href], [src]");

  elements.forEach(element => {
    if (element.hasAttribute("href")) {
      const href = element.getAttribute("href");
      if (href && !href.includes(suffix)) {
        element.href += `?${suffix}`;
        console.log("Updated link href: " + element.href);
      }
    } else if (element.hasAttribute("src")) {
      const src = element.getAttribute("src");
      if (src && !src.includes(suffix)) {
        element.src += `?${suffix}`;
        console.log("Updated src: " + element.src);
      }
    }
  });
}
