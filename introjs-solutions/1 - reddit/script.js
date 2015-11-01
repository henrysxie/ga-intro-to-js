var api = 'http://reddit.com/.json?limit=10&jsonp=?';
var linksContainer = $('#links');

function addToDOM(result){

  // Create free-floating HTML elements
  var myDiv = $('<div></div>');
  var myImage = $("<img src='" + result['data']['thumbnail'] + "' />");
  var myTitle = $("<div>"+ result['data']['title'] +"</div>");

  // Put title and image inside of the div
  myDiv.append(myTitle, myImage);

  // Add the reddit-link class for easy style targeting
  myDiv.addClass('reddit-link');

  // Add to the DOM
  linksContainer.append(myDiv);

}

function successFunction(result){

  // links is a list of 10 objects
  var links = result['data']['children'];
  console.log(links);

  // Loop over links and add each to the DOM
  for (var i = 0; i < links.length; i++) {

    // Ensure thumbnail exists for this link
    if (links[i]['data']['thumbnail']) {
      addToDOM(links[i]);
    }
  }

}

var ajaxOptions = {
  'url': api,
  'success': successFunction,
  'dataType': 'jsonp'
};

jQuery.ajax(ajaxOptions);