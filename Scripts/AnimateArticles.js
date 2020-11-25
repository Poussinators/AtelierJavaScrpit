console.log('L\'erreur qui dit "GET http://127.0.0.1:5501/%7B%7Bsrc%7D%7D 404 (Not Found)", c\'est normal tkt')

// Faire apparaitre les trucs pour mettre dans le panier.

var elements = document.getElementsByClassName("articleBox");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseenter', (event) => {

        // let articlePicture = event.target.getElementsByClassName('articlePicture')[0]

        // let img = articlePicture.getElementsByTagName('IMG')[0]
        // let box = articlePicture.getElementsByTagName('DIV')[0]

        // img.style.width = '150px';
        // $("img").animate({ width: "150px" });
        // $("#box").animate({height: "100px"});
        // reduce150px(img, parseInt(img.style.width.replace('px', '')))
        // box.style.width = '150px';
        // $("div").animate({ width: "150px" });

        let articlePicture = $(event.target).children('.articlePicture')

        let img = articlePicture.children('img')
        let box = articlePicture.children('div')

        img.animate({ width: "150px" });
        box.animate({ width: "150px" });

    }, false);
}



for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseleave', (event) => {

        // let articlePicture = event.target.getElementsByClassName('articlePicture')[0]

        // let img = articlePicture.getElementsByTagName('IMG')[0]
        // let box = articlePicture.getElementsByTagName('DIV')[0]

        // img.style.width = '300px';
        // box.style.width = '0px';

        let articlePicture = $(event.target).children('.articlePicture')

        let img = articlePicture.children('img')
        let box = articlePicture.children('div')

        img.animate({ width: "300px" });
        box.animate({ width: "0px" });

        document.activeElement.blur()

    }, false);
}

// Resize le titre de la banière en fonction de la taille de l'écran.

function resizeHeaderFontSize() {
    var percent = window.innerWidth / 1920
        // console.log(percent)
    document.getElementsByTagName('HEADER')[0].getElementsByTagName('H1')[0].style = 'font-size: ' + percent + 'em;'
}

// Resize boutiqueContainer en fonction de la taille de la fenêtre

function resizeboutiqueContainer() {
    var maxWidth = document.getElementById('boutique').offsetWidth
    var width = '0px'

    // console.log(maxWidth)

    if (maxWidth >= 1870) {
        width = '1770px'
    } else if (maxWidth >= 1516) {
        width = '1416px'
    } else if (maxWidth >= 1162) {
        width = '1062px'
    } else if (maxWidth >= 808) {
        width = '708px'
    } else if (maxWidth >= 454) {
        width = '354px'
    } else {
        width = 'min-content'
    }

    document.getElementsByClassName('boutiqueContainer')[0].style.width = width

}

window.addEventListener('resize', () => {
    resizeHeaderFontSize()
    resizeboutiqueContainer()
})

resizeHeaderFontSize()
resizeboutiqueContainer()

// // CREDITS TO https://www.cssscript.com/image-zoom-pan-hover-detail-view/
// var addZoom = function() {

//     var ProductsList = document.getElementsByClassName('articlePicture')

//     for (let index = 0; index < ProductsList.length; index++) {
//         const element = ProductsList[index];
//         // FETCH CONTAINER + IMAGE
//         var container = element,
//             imgsrc = container.currentStyle || window.getComputedStyle(container, false),
//             imgsrc = imgsrc.backgroundImage.slice(4, -1).replace(/"/g, ""),
//             img = new Image();

//         // LOAD IMAGE + ATTACH ZOOM
//         img.src = imgsrc;
//         img.onload = function() {
//             var imgWidth = img.naturalWidth,
//                 imgHeight = img.naturalHeight,
//                 ratio = imgHeight / imgWidth,
//                 percentage = ratio * 100 + '%';

//             // ZOOM ON MOUSE MOVE
//             container.onmousemove = function(e) {
//                 var boxWidth = container.clientWidth,
//                     xPos = e.pageX - this.offsetLeft,
//                     yPos = e.pageY - this.offsetTop,
//                     xPercent = xPos / (boxWidth / 100) + '%',
//                     yPercent = yPos / (boxWidth * ratio / 100) + '%';

//                 Object.assign(container.style, {
//                     backgroundPosition: xPercent + ' ' + yPercent,
//                     backgroundSize: imgWidth + 'px'
//                 });
//             };

//             // RESET ON MOUSE LEAVE
//             container.onmouseleave = function(e) {
//                 Object.assign(container.style, {
//                     backgroundPosition: 'center',
//                     backgroundSize: 'cover'
//                 });
//             };
//         }
//     };

// };

// addZoom();

// // window.addEventListener("load", function() {
// //     addZoom("zoom-img");
// // });