var imageCount = 10;
var indexCounter = 0;

var container = $('#container');
var viewport = $('#viewport');

function showImage(index){

  var viewportWidth = $(window).width();

  // set margin-left property of container such that the correct image shows
  // what's the offset? hint: use the index and the viewport width

}


function nextImage(){

  // if we're at last image reset the indexcounter to 0
  // else increment the indexcounter

  // call showImage with the indexCounter

}

function addToDOM (photo) {

  // Grab image url and append to dom in a div with class "post"

  // Set the width of the post to be that of the viewport

}


function apiSuccess(result){
  var photos = result['items'];
  console.log(photos);

  // Loop over photos and add each to DOM

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