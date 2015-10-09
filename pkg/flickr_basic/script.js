"use strict";

var imageCount = 10;
var indexCounter = 0;

var container = $('#container');
var viewport = $('#viewport');

function showImage(index){

  // whats the offset? hint: use the image number and the viewport width

  var viewportWidth = -$(window).width();
  container.css('margin-left', viewportWidth * index);


  // What's the offset
  // Use the offset as the margin-left
}


function previousImage () {

  if (indexCounter == 0) {
    indexCounter = imageCount - 1;
  }
  else {
    indexCounter--;
  }
  showImage(indexCounter);

}


function nextImage(){

  // if indexcounter is the same as imagecount - 1
  // reset the indexcounter to 0

  if (indexCounter == imageCount - 1) {
    indexCounter = 0;
  }
  else {
    indexCounter++;
  }
  showImage(indexCounter);

}

function addToDOM (result) {
  var imageSrc = result['media']['m'];
  // Replace _m.jpg with _b.jpg
  imageSrc = imageSrc.replace('_m.jpg', '_b.jpg');

  var myImage = $("<img src='" + imageSrc + "' />");
  $('#slides').append(myImage);

}


function apiSuccess(result){
  var photos = result['items'];
  console.log(photos);

  // For photo in photos
  for (var i = 0; i < photos.length; i++) {
    var currentPhoto = photos[i];
    addToDOM(currentPhoto);
  }

}

var ajaxSettings = {
  // The url to flickrs api
  url: 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?',
  // The format we want it in
  dataType: 'jsonp',
  // The function to execute when the api has finished loading
  success: apiSuccess
};

$.ajax(ajaxSettings);


function onKeyPress( event ) {

  if (event.which == 109) {
    nextImage();
  }
  else if (event.which == 110) {
    previousImage();
  }
}

$(window).keypress(onKeyPress);

