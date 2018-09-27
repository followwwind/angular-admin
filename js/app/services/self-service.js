'use strict';
angular.module('app')
    .service('time', function() {
        this.format = function (ele) {
            if(ele == null || ele == undefined){
                return "";
            }else{
                return moment(new Date(ele)).format("YYYY-MM-DD HH:mm:ss");
            }
        }
    })
    .service('obj', function() {
        this.copy = function (source, target) {
            if(source != null && target != null && source != undefined && target != undefined){
                for(var key in source){
                    target[key] = source[key];
                }
            }
        }
    })
    ;
