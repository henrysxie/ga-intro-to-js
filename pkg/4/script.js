"use strict";

var api = 'http://reddit.com/.json?limit=10&jsonp=?';
var linksContainer = $('#links');

function addToDOM(result){
  var myDiv = $('<div></div>');
  var myImage = $("<img src='" + result['data']['thumbnail'] + "' />");
  var myTitle = $("<div>"+ result['data']['title'] +"</div>");

  myDiv.append(myImage);
  myDiv.append(myTitle);
  linksContainer.append(myDiv);
}


var links;
function successFunction(result){
  links = result['data']['children'];
  // console.log(links);

  // var thumbnails = _.map(links, function(link) {
  //   return link.data.thumbnail;
  // });

  // console.log(thumbnails);

  for (var i = 0; i < links.length; i++) {
    addToDOM(links[i]);
  }

  // for each link in links array
  //   currentLink =
  //   console.log currentLink title
  //   console.log is `thumbnail` empty?
}

var ajaxOptions = {
  'url': api,
  'success': successFunction,
  'dataType': 'jsonp'
};

jQuery.ajax(ajaxOptions);
