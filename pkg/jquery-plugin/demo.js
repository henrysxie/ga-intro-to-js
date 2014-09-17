function init() {
  $("#sortable").sortable();
  getFlickrData();
}

function getFlickrData() {
  var requestUrl = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json';
  var container = document.getElementById('sortable');

   $.ajax({
      url: requestUrl,
      dataType: 'jsonp',
      jsonpCallback: 'jsonFlickrFeed',
      success: function(data) {
        var ary = data.items;

        for (var i = 0; i < 5; i++) {
          var img = document.createElement('img');
          img.src = ary[i].media.m;
          console.log(ary[i]);
          container.appendChild(img);
        }

      }
    });
}

window.onload = init;

