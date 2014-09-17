"use strict";

/*
 * Config and variables
 */

// Delay between the next image being shown (in milliseconds)
var delay = 5000;
// The timer for our auto slide
var timer = null;

// Quick references to elements we'll be repeatedly using
var viewport = document.getElementById('viewport');
var container = document.getElementById('container');

/*
 * Functions that perform actions
 */

// A function that when given an element fits it to the screen width
function fitToViewport(element){
  if(element)
    element.style.width = viewport.clientWidth + 'px';
}

function fitAllToViewport(){
  var elements = document.getElementsByClassName('post');
  for (var i = elements.length - 1; i >= 0; i--){
    fitToViewport(elements[i]);
  }
  showInViewport(document.getElementsByClassName('active')[0]);
}

// Given an element put it into the viewport
function showInViewport(element){
  // Mark this image active
  element.className = 'post active';
  // Position the viewport to reveal this image
  console.log('element:', element, 'offset:', element.offsetLeft);
  container.style.marginLeft = (-1 * element.offsetLeft) + 'px';
}

// Restart the global timer for progressing to the next image
function resetInterval(){
  window.clearInterval(timer);
  timer = window.setInterval(nextImage, delay);
}

// This function makes the first image to load the 'active' image
function queueNext(element){
  showInViewport(element);
  resetInterval();
  // destroy this function by redefining it to be an empty function
  queueNext = function(){};
}

/*
 * Event callbacks
 */

function imageLoad(){
  // Create a container for our image
  var postContainer = document.createElement('div');
  postContainer.className = 'post';

  // Add the picture to the container
  postContainer.appendChild(this);
  // Set the post to fill the screen
  fitToViewport(this.parentElement);
  // And add it to the slideshow
  container.appendChild(this.parentElement);
  queueNext(this.parentElement);
}

// This function is to be called when reddits api responds
function apiSuccess(data){
  console.info('flickr response', data);
  // Reddit returns a lot of data, find the bit we actually want
  var whiteMeat = data['items'];
  // Loop through the reddit posts
  for (var i = whiteMeat.length - 1; i >= 0; i--) {
    // Assign the post to a variable for neatness
    var data = whiteMeat[i];
    // Generate the image for the post
    var postImage = new Image();
    // *on* the images load event, execute the imageload function
    postImage.onload = imageLoad;
    // Set the image source to the url we got from flickr
    postImage.src = data['media']['m'].replace('_m', '_b');
    // Disable the browser default behaviour, can interfere with swiping
    postImage.draggable = false;
  };
}

function getPosts(){
  // Settings to pass to jquery to fetch the data
  var ajaxSettings = {
    // The url to flickrs api
    url: 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?',
    // The format we want it in
    dataType: 'jsonp',
    // The function to execute when the api has finished loading
    success: apiSuccess,
  };
  // Pass all the settings to being fetching the data
  $.ajax(ajaxSettings);
}

function nextImage(e){
  // If this was called from an event
  // tell teh browser not to do any default behaviours  
  if(e) e.gesture.preventDefault();
  resetInterval();
  var current = document.getElementsByClassName('active')[0]
  current.className = 'post'
  // Is there an image on the right of this image?
  if(current.nextElementSibling)
    // If so, show it
    showInViewport(current.nextElementSibling)
  // Is this not the only image in the slide show
  else if(container.children.length > 1)
    // If there are other images, show the first one
    showInViewport(container.firstElementChild)
}

function previousImage(e){
  // If this was called from an event
  // tell teh browser not to do any default behaviours
  if(e) e.gesture.preventDefault();
  resetInterval();
  var current = document.getElementsByClassName('active')[0]
  current.className = 'post'
  // Is there an image on the right of this image?
  if(current.previousElementSibling)
    // If so, show it
    showInViewport(current.previousElementSibling)
  // Is this not the only image in the slide show
  else if(container.children.length > 1)
    // If there are other images, show the last one
    showInViewport(container.lastElementChild)
}

/*
 * Page setup
 */

// When the document has loaded, begin fetching the images
$(getPosts);

// Set up swipe events for cycling through images
Hammer(document, {swipe_velocity: 0.00000005}).on("swipeleft", nextImage);
Hammer(document, {swipe_velocity: 0.00000005}).on("swiperight", previousImage);

// If the window changes size, resize the image
// note: this is very! inefficient
window.addEventListener('resize', fitAllToViewport);