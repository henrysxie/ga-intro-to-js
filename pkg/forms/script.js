"use strict";

// console.log(input.value);
// console.log(select.options, select.selectedIndex);

function submitFunction(e){


}

var submit = document.getElementById('submit');
function clickFunction(e){
  alert('clicked!');
};
submit.addEventListener('click', clickFunction);

// Below is an example of posting data to the github gist api

var api = 'https://api.github.com/gists';

var gist = {
  "description": "the description for this gist",
  "public": true,
  "files": {
    "file1.txt": {
      "content": "String file contents"
    }
  }
};

function successFunction(data){
  debugger;
}

function errorFunction(data){
  debugger;
}

var ajaxOptions = {
  'url': api,
  'success': successFunction,
  'error': errorFunction,
  'type': 'post',
  'data': JSON.stringify(gist)
}