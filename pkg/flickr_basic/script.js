"use strict";

var imageCount = 10;
var indexCounter = 0;

var container = $('#container');
var viewport = $('#viewport');

function showImage(index){
  // whats the offset? hint: use the image number and the viewport width

  var viewportWidth = -$(window).width();
  container.css('margin-left',  index * viewportWidth);
}

function nextImage(){
  indexCounter++;
  showImage(indexCounter);

  if (indexCounter > 10) {
    indexCounter = 0;
    showImage(indexCounter);
  }

  // if indexcounter is the same as imagecount
  // reset the indexcounter to 0

  // increment the indexcounter
  // call showImage with the indexCounter
}

function apiSuccess(result){
  var photos = result['items'];
  imageCount = photos.length;
  console.log(photos);

  // For photo in photos
  for (var i = 0; i < photos.length; i++) {
    var photo = photos[i];
    var post = $('<div class="post"></div>');
    var src = photo.media.m;
    var bigSrc = src.replace('_m', '_b');
    var myImg = $("<img src='" + bigSrc + "' />");

    console.log(photo.media.m);
    post.append(myImg);

    post.width(viewport.width());

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


$("body").on("keydown", function() {
  nextImage();
});
