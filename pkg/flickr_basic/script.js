"use strict";

var imageCount = 20;
var indexCounter = 0;

var container = $('#container');
var viewport = $('#viewport');

function showImage(index){
  // whats the offset? hint: use the image number and the viewport width

  var viewportWidth = -$(window).width();

  // What's the offset
  // Use the offset as the margin-left
}

function nextImage(){

  // if indexcounter is the same as imagecount
  // reset the indexcounter to 0

  // increment the indexcounter
  // call showImage with the indexCounter
}

function apiSuccess(result){
  var photos = result['items'];
  console.log(photos);

  // For photo in photos

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