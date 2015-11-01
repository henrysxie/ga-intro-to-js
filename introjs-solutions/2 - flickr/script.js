var imageCount = 20;

// Global variable to keep track of the index
// of the photo we're currently showing
var indexCounter = 0;

var container = $('#container');
var viewport = $('#viewport');

function showImage(index){

  var viewportWidth = $(window).width();

  // The offset is a multiple of the viewport width
  var offset = viewportWidth * index;

  // Use the negative offset to pull the container to the left
  container.css('margin-left', -offset);

}


function nextImage(){

  // if we're at last image reset the indexcounter to 0
  if (indexCounter == imageCount - 1) {
    indexCounter = 0;
  }

  // else increment the indexcounter
  else {
    indexCounter++;
  }

  // call showImage with the indexCounter
  showImage(indexCounter);

}


function addToDOM (photo) {

  // Create an empty div to contain the image
  var post = $('<div></div>');

  // Fill the img src from the photo we got back from Flickr
  // Do a string replacement to get the big image
  var myImage = $("<img src='" + photo['media']['m'].replace("_m.jpg", "_b.jpg") + "' />");

  // Nest myImage under post
  post.append(myImage);

  // We need this class to apply the appropriate styles
  post.addClass('post');

  // Make sure we set the width of the div to fill up the browser window
  post.width(viewport.width());

  // Add the post to the DOM
  container.append(post);

}


function apiSuccess(result){

  // Photos is a list of 20 objects
  var photos = result['items'];
  console.log(photos);

  // Loop over photos and add each to DOM
  for (var i = 0; i < photos.length; i++) {
    addToDOM(photos[i]);
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


// Ensure each post maintains the full width of the browser window
// by listening to the resize event
$( window ).resize(function() {
  var viewportWidth = viewport.width();
  $('.post').width(viewportWidth);
});


// Go to the next image if user clicks anywhere
$(window).click(nextImage);


// Go to next image every 5 seconds
setInterval(nextImage, 5000);


// Go to next image if user presses right arrow
$(window).keydown(function(e) {
  if(e.keyCode == 39) { // right
    nextImage();
  }
});
