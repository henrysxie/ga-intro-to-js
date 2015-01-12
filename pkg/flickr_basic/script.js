"use strict";

var imageCount = 20;
var indexCounter = 0;

var container = $('#container');
var viewport = $('#viewport');

function showImage(index){
  // whats the offset? hint: use the image number and the viewport width
  var viewportWidth = $(window).width();
  container.css('margin-left', -1 * index * viewportWidth + "px");
}

function nextImage(){
  if (indexCounter < imageCount - 1) {
    indexCounter++;
  }
  else {
    indexCounter = 0;
  }
  showImage(indexCounter);
}


function apiSuccess(result){
  var photos = result['items'];
  console.log(photos);

  // For photo in photos
  for (var i=0; i < photos.length; i++) {
    var photo = photos[i];
    var post = $('<div class="post"></div>');
    var img = $('<img src="' + photo.media.m.replace('_m', '_b') + '" />');

    // Fit post to viewport width
    post.width(viewport.width());
    post.append(img);
    container.append(post);
  }

  // setInterval(nextImage, 5000);

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


$( "body" ).on( "keydown", function() {
  nextImage();
});