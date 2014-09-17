"use strict";

var api = 'http://reddit.com/.json?limit=10&jsonp=?';

function successFunction(result){
  var links = result['data']['children'];


}

var ajaxOptions = {
  'url': api,
  'success': successFunction,
  'dataType': 'jsonp'
}

$.ajax(ajaxOptions);