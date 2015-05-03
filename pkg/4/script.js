"use strict";

var api = 'http://reddit.com/.json?limit=10&jsonp=?';
var linksContainer = $('#links');

function addToDOM(link){
  var myDiv = $('<div></div>');
  var myImage = $("<img src='" + link['data']['thumbnail'] + "' />");
  var myTitle = $("<div>"+ link['data']['title'] +"</div>");

  myDiv.append(myImage);
  myDiv.append(myTitle);
  linksContainer.append(myDiv);
}

function successFunction(result){

  var links = result['data']['children'];
  console.log(links)

  for (var i = 0; i < links.length; i++) {
    addToDOM(links[i]);
  }

}

var ajaxOptions = {
  'url': api,
  'success': successFunction,
  'dataType': 'jsonp'
};

jQuery.ajax(ajaxOptions);