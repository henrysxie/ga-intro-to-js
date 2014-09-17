var url = 'https://www.googleapis.com/plus/v1/people?';
var key = 'AIzaSyAMhlUOwEZq2klZ2TOGKCrrPYq2Q0kdh3w';
query = 'tzou';

function init() {
  $('#sortable').sortable();
  getFlickrData();
  getSocialData();
}

function getFlickrData() {
  var requestUrl = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json';

   $.ajax({
      url: requestUrl,
      dataType: 'jsonp',
      jsonpCallback: 'jsonFlickrFeed',
      success: function(data) {
        console.log(data.items);
      }
    });
}

function getSocialData() {
  var requestUrl = url + '&query=' + query + '&key=' + key + '&maxResults=15';

  $.ajax({
      url: requestUrl,
      dataType: 'jsonp',
      success: function(data) {
        var items = data.items;
        for (var i = 0; i < items.length; i++) {
          var name = items[i].displayName;
          var link = items[i].url;
          var imgSrc = items[i].image.url;

          var panel = $('<div>');
          $(panel).addClass('ui-state-default');
          $(panel).text(name);

          var img = $('<img>');
          $(img).attr('src', imgSrc);
          $(panel).append(img);

          var anchor = $('<a>')
          $(anchor).text('Profile Link');
          $(anchor).attr('href', link);
          $(anchor).attr('target', '_blank');

          $(panel).append(anchor);

          $('#sortable').append(panel);
        }
      }
    });
}