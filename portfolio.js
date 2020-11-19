var currentPosition = 0;
var prevImage = function() {
    currentPosition = currentPosition + 400;
    document.getElementById('imageSlider').style.transform = 'translateX(' + currentPosition + 'px)'
    }

var nextImage = function() {     
    currentPosition = currentPosition - 400;
    document.getElementById('imageSlider').style.transform = 'translateX(' + currentPosition + 'px)'
    }


var prevImage2 = function() {
    currentPosition = currentPosition + 400;
    document.getElementById('imageSlider2').style.transform = 'translateX(' + currentPosition + 'px)'
    }

var nextImage2 = function() {     
    currentPosition = currentPosition - 400;
    document.getElementById('imageSlider2').style.transform = 'translateX(' + currentPosition + 'px)'
    }


var prevImage3 = function() {
    currentPosition = currentPosition + 400;
    document.getElementById('imageSlider3').style.transform = 'translateX(' + currentPosition + 'px)'
    }

var nextImage3 = function() {     
    currentPosition = currentPosition - 400;
    document.getElementById('imageSlider3').style.transform = 'translateX(' + currentPosition + 'px)'
    }