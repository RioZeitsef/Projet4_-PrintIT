
/**
 * 
 */
let index = 0
let banner = document.querySelectorAll(".banner-img")
let arrows = document.querySelectorAll(".arrow")
let dots = document.querySelectorAll(".dot")
let bannerImg = document.querySelectorAll(".banner-img")
let tagline = document.getElementById("tagline")


for (let i = 0; i < dots.length; i++) {
  let dotswhite = dots[i]
    dots[i].classList.add("dot_" + i)
    dotswhite.addEventListener("click", (event) => {
      dotSelected = event.target
      dotSelectedWhite(Array.from(dots), dotSelected)
      slideto(i);
  })
}

for (let i = 0; i < arrows.length; i++) {
let arrowDirection = arrows[i]

arrowDirection.addEventListener("click", e => {
arrowTarget = e.target;
})
}  

for (let i = 0; i < arrows.length; i++) {
  let arrowDirection = arrows[i]

  arrowDirection.addEventListener("click", e => {
    if (e.target.classList.contains('arrow_right')) {
      // Naviguer vers la droite
      index = (index + 1) % slides.length;
    } else if (e.target.classList.contains('arrow_left')) {
      // Naviguer vers la gauche
      index = (index - 1 + slides.length) % slides.length;
    }

    // Mettre à jour l'image et le tagline
    bannerImg[0].src = slides[index].url;
    tagline.innerHTML = slides[index].tagLine;

    // Mettre à jour le dot sélectionné
    dotSelectedWhite(Array.from(dots), dots[index]);
  })
}

function dotSelectedWhite(dots, dotSelected) {
  dots.filter((element, i) => {
    if (dotSelected.classList.contains("dot_" + i)) {
      return false
    }
    else {
      return true
    }
  }).forEach(element => {
    element.classList.remove("dot_selected")
  });
  dotSelected.classList.add("dot_selected")

  taglineElement.innerHTML = slides[i].tagLine;
}

const slides = [
  {
    url: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    url: "./assets/images/slideshow/slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    url: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    url: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

/**
 * 
 * @param {number} index
 * @param {array} imageArray   
 * @returns {object}
 */

function sliderNext(imageArray, index) {
    let image = imageArray[index + 1];
    console.log("next image"); 

    return image;
}


function sliderPrevious(imageArray, index) {
  if (index === 0) {
    index = imageArray.length - 1;
  }
  let image = imageArray[index - 1];

  return image
}

function dotSelectedWhite(dots, dotSelected) {
  dots.filter((element, i) => {
    if (dotSelected.classList.contains("dot_" + i)) {
      return false
    }
    else {
      return true
    }
  }).forEach(element => {
    element.classList.remove("dot_selected")
  });
  dotSelected.classList.add("dot_selected")
}
/**
 * 
 * @param {number} index index de l'image séléctionné
 * 
 */
function slideto(index) {
  let currentIndex;
  if (index >= 0 && index < slides.length) {
    currentIndex = index;

    slides.forEach((img, i) => {
      if (i === currentIndex) {
        bannerImg[0].src = img.url;
        bannerImg[0].alt = img.tagLine;
      }
    });
  }
}



