"use strict";

var imageCount = 20;
var indexCounter = 0;

var container = $('#container');
var viewport = $('#viewport');

function showImage(index){
  var negViewportWidth = -$(window).width();

  // What's the offset
  var offset = index * negViewportWidth;

  // Use the offset as the margin-left
  $('#container').css('margin-left', offset);

}

function nextImage(){

  // if indexcounter is the same as imagecount
  if (indexCounter == imageCount - 1) {

    // reset the indexcounter to 0
    indexCounter = 0;
  }
  else {
    // increment the indexcounter
    indexCounter++;
  }

  // call showImage with the indexCounter
  showImage(indexCounter);
}

function addToDOM (result) {
  var myDiv = $('<div class="post"></div>');
  var myImage = $("<img src='" + result['media']['m'].replace('_m.jpg', '_b.jpg') + "' />");
  myDiv.append(myImage);
  container.append(myDiv);

  // Get viewport width
  var viewportWidth = viewport.width();

  // Set post div width to be that of the viewport
  myDiv.width(viewportWidth);

}


$(window).keypress(function (e) {
  if (e.keyCode === 0 || e.keyCode === 32) {
    nextImage();
  }
});



function apiSuccess(result){
  var photos = result['items'];
  console.log(photos);

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
  success: apiSuccess,
};

$.ajax(ajaxSettings);