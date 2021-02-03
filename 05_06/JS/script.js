const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");
var captionElement = document.createElement("figcaption");

// var captionText = document.createTextNode(altText);
// captionElement.appendChild(captionText);

captionElement.append(altText); // This is not supported by IE

FEATURED.appendChild(captionElement);
THEIMAGE.setAttribute("alt", "");