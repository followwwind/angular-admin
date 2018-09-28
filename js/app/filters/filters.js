'use strict';

/* Filters */
// need load the moment.js to use this filter. 
angular.module('app.filters', [])
  .filter('decodeUriComponent', function() {
    return function(imgUrl) {
      if(imgUrl == null){
          return "";
      }
      //console.log(imgUrl);
      return decodeURIComponent(imgUrl);
    }
  });