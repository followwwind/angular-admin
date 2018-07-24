// lazyload config

angular.module('app')
    /**
   * jQuery plugin config use ui-jq directive , config the js and css files that required
   * key: function name of the jQuery plugin
   * value: array of the css js file located
   */
  .constant('JQ_CONFIG', {
      easyPieChart:   [   'js/jquery/jquery.easy-pie-chart/jquery.easypiechart.fill.js'],
      sparkline:      [   'js/jquery/jquery.sparkline/jquery.sparkline.retina.js'],
      plot:           [   'js/jquery/flot/jquery.flot.js',
                          'js/jquery/flot/jquery.flot.pie.js', 
                          'js/jquery/flot/jquery.flot.resize.js',
                          'js/jquery/flot.tooltip/jquery.flot.tooltip.js',
                          'js/jquery/flot.orderbars/jquery.flot.orderBars.js',
                          'js/jquery/flot-spline/jquery.flot.spline.js'],
      moment:         [   'js/other/moment/moment.js'],
      screenfull:     [   'js/jquery/screenfull/screenfull.min.js'],
      slimScroll:     [   'js/jquery/slimscroll/jquery.slimscroll.min.js'],
      sortable:       [   'js/jquery/html5sortable/jquery.sortable.js'],
      nestable:       [   'js/jquery/nestable/jquery.nestable.js',
                          'js/jquery/nestable/jquery.nestable.css'],
      filestyle:      [   'js/jquery/bootstrap-filestyle/bootstrap-filestyle.js'],
      slider:         [   'js/jquery/bootstrap-slider/bootstrap-slider.js',
                          'js/jquery/bootstrap-slider/bootstrap-slider.css'],
      chosen:         [   'js/jquery/chosen/chosen.jquery.min.js',
                          'js/jquery/bootstrap-chosen/bootstrap-chosen.css'],
      TouchSpin:      [   'js/jquery/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js',
                          'js/jquery/bootstrap-touchspin/jquery.bootstrap-touchspin.min.css'],
      wysiwyg:        [   'js/jquery/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                          'js/jquery/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
      dataTable:      [   'js/jquery/datatables/js/jquery.dataTables.min.js',
                          'js/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
                          'js/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.css'],
      vectorMap:      [   'js/jquery/bower-jvectormap/jquery-jvectormap-1.2.2.min.js', 
                          'js/jquery/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
                          'js/jquery/bower-jvectormap/jquery-jvectormap-us-aea-en.js',
                          'js/jquery/bower-jvectormap/jquery-jvectormap-1.2.2.css'],
      footable:       [   'js/jquery/footable/js/footable.all.min.js',
                          'js/jquery/footable/css/footable.core.css'],
      fullcalendar:   [   'js/other/moment/moment.js',
                          'js/jquery/fullcalendar/fullcalendar.min.js',
                          'js/jquery/fullcalendar/fullcalendar.css',
                          'js/jquery/fullcalendar/fullcalendar.theme.css'],
      daterangepicker:[   'js/other/moment/moment.js',
                          'js/jquery/bootstrap-daterangepicker/daterangepicker.js',
                          'js/jquery/bootstrap-daterangepicker/daterangepicker-bs3.css'],
      tagsinput:      [   'js/jquery/bootstrap-tagsinput/bootstrap-tagsinput.js',
                          'js/jquery/bootstrap-tagsinput/bootstrap-tagsinput.css']
                      
    }
  )
  // oclazyload config
  .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
      // We configure ocLazyLoad to use the lib script.js as the async loader
      $ocLazyLoadProvider.config({
          debug:  true,
          events: true,
          modules: [
              {
                  name: 'ngGrid',
                  files: [
                      'js/angular/ng-grid/ng-grid.min.js',
                      'js/angular/ng-grid/ng-grid.min.css',
                      'js/angular/ng-grid/ng-grid.bootstrap.css'
                  ]
              },
              {
                  name: 'ui.grid',
                  files: [
                      'js/angular/angular-ui-grid/ui-grid.min.js',
                      'js/angular/angular-ui-grid/ui-grid.min.css',
                      'js/angular/angular-ui-grid/ui-grid.bootstrap.css'
                  ]
              },
              {
                  name: 'ui.select',
                  files: [
                      'js/angular/angular-ui-select/select.min.js',
                      'js/angular/angular-ui-select/select.min.css'
                  ]
              },
              {
                  name:'angularFileUpload',
                  files: [
                    'js/angular/angular-file-upload/angular-file-upload.min.js'
                  ]
              },
              {
                  name:'ui.calendar',
                  files: ['js/angular/angular-ui-calendar/calendar.js']
              },
              {
                  name: 'ngImgCrop',
                  files: [
                      'js/angular/ngImgCrop/minified/ng-img-crop.js',
                      'js/angular/ngImgCrop/minified/ng-img-crop.css'
                  ]
              },
              {
                  name: 'angularBootstrapNavTree',
                  files: [
                      'js/angular/angular-bootstrap-nav-tree/abn_tree_directive.js',
                      'js/angular/angular-bootstrap-nav-tree/abn_tree.css'
                  ]
              },
              {
                  name: 'toaster',
                  files: [
                      'js/angular/angularjs-toaster/toaster.js',
                      'js/angular/angularjs-toaster/toaster.css'
                  ]
              },
              {
                  name: 'textAngular',
                  files: [
                      'js/angular/textAngular/textAngular-sanitize.min.js',
                      'js/angular/textAngular/textAngular.min.js'
                  ]
              },
              {
                  name: 'vr.directives.slider',
                  files: [
                      'js/angular/venturocket-angular-slider/angular-slider.min.js',
                      'js/angular/venturocket-angular-slider/angular-slider.css'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular',
                  files: [
                      'js/angular/videogular/videogular.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.controls',
                  files: [
                      'js/angular/videogular-controls/controls.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.buffering',
                  files: [
                      'js/angular/videogular-buffering/buffering.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.overlayplay',
                  files: [
                      'js/angular/videogular-overlay-play/overlay-play.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.poster',
                  files: [
                      'js/angular/videogular-poster/poster.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.imaads',
                  files: [
                      'js/angular/videogular-ima-ads/ima-ads.min.js'
                  ]
              },
              {
                  name: 'xeditable',
                  files: [
                      'js/angular/angular-xeditable/js/xeditable.min.js',
                      'js/angular/angular-xeditable/css/xeditable.css'
                  ]
              },
              {
                  name: 'smart-table',
                  files: [
                      'js/angular/angular-smart-table/smart-table.min.js'
                  ]
              }
          ]
      });
  }])
;
