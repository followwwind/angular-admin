'use strict'

myapp.controller('DataCtrl', function($scope, $log){
	
	$("#example1").DataTable();
    $('#example2').DataTable({
      	"paging": true,
      	"lengthChange": false,
      	"searching": false,
      	"ordering": true,
      	"info": true,
      	"autoWidth": false
    });
});

