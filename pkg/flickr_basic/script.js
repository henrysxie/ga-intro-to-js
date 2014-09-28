"use strict";

var imageCount = 20;
var indexCounter = 0;

var container = $('#container');
var viewport = $('#viewport');


function fitToViewport(element){
  if(element) {
    element.style.width = viewport.width() + "px";
  }
}


function showImage(index){
  // whats the offset? hint: use the image number and the viewport width

  var viewportWidth = -$(window).width();

  // What's the offset
  var offset = index * viewportWidth;

  // Use the offset as the margin-left
  container.css('margin-left', offset);

}

function nextImage(){

  // if indexcounter is the same as imagecount
  if (indexCounter === imageCount) {

    // reset the indexcounter to 0
    indexCounter = 0;
  }
  else {
    // increment the indexcounter
    indexCounter++;

    // call showImage with the indexCounter
    showImage(indexCounter);
  }
}

function apiSuccess(result){
  var photos = result['items'];
  console.log(photos);

  // For photo in photos
  for (var i = 0; i < photos.length; i++) {
    var photo = photos[i];
    var img = new Image();
    img.src = photo['media']['m'].replace('_m', '_b');
    var post = $('<div class="post"></div>');
    fitToViewport(post[0]);
    post.append(img);
    container.append(post);

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