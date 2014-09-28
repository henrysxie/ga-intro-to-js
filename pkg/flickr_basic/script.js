"use strict";

var test;
var imageCount = 20;
var indexCounter = 0;

var container = $('#container');

var viewport = $('#viewport');


var ajaxSettings = {
  // The url to flickrs api
  url: 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?',
  // The format we want it in
  dataType: 'jsonp',
  // The function to execute when the api has finished loading
  success: apiSuccess,
};


$.ajax(ajaxSettings);


function showImage(index){
  // whats the offset? hint: use the image number and the viewport width

  var viewportWidth = -$(window).width();
  // What's the offset
  container.css('margin-left', index * viewportWidth + "px");
  // Use the offset as the margin-left
}

function nextImage(){

  // if indexcounter is the same as imagecount
  debugger
  if (indexCounter == imageCount - 1) {
    // reset the indexcounter to 0
    indexCounter = 0;
  }

  // increment the indexcounter
  indexCounter++;
  // call showImage with the indexCounter
  showImage(indexCounter);
  debugger
}

function apiSuccess(result){
  var photos = result['items'];
  test = photos;
  console.log(photos);

  // For photo in photos
  for (var i = 0; i < photos.length; i++) {
    var photo = photos[i];
    var post = $('<div class="post"></div>');
    var img = $('<img src="' + photo.media.m.replace('_m', '_b') + '" />');

    // Fit post to viewport width
    post.width(viewport.width());

    post.append(img);
    container.append(post);
  }

  setInterval(nextImage, 5000);


}