"use strict";

var api = 'http://reddit.com/.json?limit=10&jsonp=?';
var linksContainer = $('#links');

function addToDOM(result){
  var myDiv = $('<div></div>');
  var myImage = $("<img src='" + result['data']['thumbnail'] + "' />");
  var myTitle = $("<div>"+ result['data']['title'] +"</div>");

  myDiv.append(myTitle, myImage);
  myDiv.addClass('reddit-link');

  linksContainer.append(myDiv);
}

function successFunction(result){
  var links = result['data']['children'];
  for (var i = 0; i < links.length; i++) {
    var currentLink = links[i];
    addToDOM(currentLink);
  }
}

var ajaxOptions = {
  'url': api,
  'success': successFunction,
  'dataType': 'jsonp'
};

jQuery.ajax(ajaxOptions);