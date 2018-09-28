'use strict';

/* Services */
// need load the moment.js to use this filter.
angular.module('app.services', [])
  .service('codeService', function(){
    return {
      encode : function(content){
        return encodeURIComponent(content);
      },
      decode : function(content){
        return decodeURIComponent(content);
      }
    }
  })
  .service('dateService', function(){
      return {
          getDateStr : function(date, pattern){
              var str = "";
              if(date instanceof Date){
                  if(pattern == undefined){
                    pattern = "YYYY-MM-DD HH:mm:ss";
                  }
                  str = moment(date).format(pattern);
              }

              return str;
          },
          getStrDate : function(str, pattern){
              var date = moment(str, pattern).toDate();
              return date;
          },
          getLastDate : function (date, count, unit, type) {
              //console.log(date);
              // var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
              //console.log(date.match(reg) != null);
              var str = "";
              var dateStr = "";
              var unit2 = unit == undefined ? "days" : unit;
              var cal = "";
              if(date instanceof Date){
                  dateStr = moment(date).format("YYYY-MM-DD HH:mm:ss");
                  cal = moment(date).subtract(count, unit2).calendar();
              }else if( (typeof date == 'string') && date.constructor==String){
                  //console.log(date);
                  dateStr = date;
                  var pattern = "YYYY-MM-DD HH:mm:ss";
                  if(type == "date"){
                      pattern = "YYYY-MM-DD";
                  }
                  cal = moment(date, pattern).subtract(count, unit2).calendar();
              }
              var dateArr = dateStr.split(" ");
              var calArr = cal.split("/");

              if(calArr.length == 3){
                  if(type == "date"){
                      str = calArr[2] + "-" + calArr[0] + "-" + calArr[1];
                  }else if(type == "time"){
                      str = dateArr[1];
                  }else{
                      if(dateArr.length > 0)
                        str = calArr[2] + "-" + calArr[0] + "-" + calArr[1] + " " + dateArr[1];
                  }
              }
              return str;
          },
          getDiffDays : function(start, end, pattern){
              var a = null, b = null;
              if(start instanceof Date && end instanceof Date){
                  a = end.getTime();
                  b = start.getTime();
              }else if((typeof start == 'string') && start.constructor==String && (typeof end == 'string') && end.constructor==String){
                  a = this.getStrDate(end, pattern).getTime()
                  b = this.getStrDate(start, pattern).getTime()
              }

              var days = -1;

              if(a != null && b!= null){
                  days = parseInt((a-b)/(1000*3600*24));
              }
              return days;
          },
          getDiffArrDays : function (start, end, sign, pattern) {
              //console.log(start + "-" + end);
              var arr = new Array();
              var days = this.getDiffDays(start, end, pattern);
              //console.log(days);
              for(var i = 0; i < days; i++){
                  var cal = moment(start).add(i, "days").calendar();
                  var calArr = cal.split("/");
                  if(sign == undefined){
                      sign = "-";
                  }

                  arr.push(calArr[2] + sign + calArr[0] + sign + calArr[1]);
              }

              return arr;
          }
      }
  })
  .service('strService', function(){
      return {
          isInteger : function(str){
              var flag = false;
              var reg = /^[0-9]*$/;
              if(this.isString(str) && reg.test(str)){
                  flag = true;
              }
              return flag;
          },
          isString : function (str) {
              return (typeof str=='string')&&str.constructor==String;
          }
      }
  })
  .factory('httpInterceptor', ['$q', '$location', function ($q, $location) {
      return {
        // 可选，拦截成功的请求
        /*
         该方法会在$http发送请求到后台之前执行，因此你可以修改配置或做其他的操作。
         该方法接收请求配置对象(request configuration object)作为参数，然后必须返回配置对象或者promise 。
         如果返回无效的配置对象或者 promise 则会被拒绝，导致$http 调用失败
         */
        request: function (config) {
            // 进行预处理
            // 例如加令牌
            /*
             Request Headers
             token:token666 //加的令牌
             */
            // console.log("request");
            // console.log($location.url());
            // console.log($location.absUrl());
            // console.log($location.path());
            // console.log($location.host());
            // console.log($location.port());
            // console.log($location.protocol());
            return $q.when(config);
        },

        // 可选，拦截成功的响应
        /*
         该方法会在$http接收到从后台过来的响应之后执行，因此你可以修改响应或做其他操作。
         该方法接收响应对象(response object)作为参数，
         然后必须返回响应对象或者promise。响应对象包括了请求配置(request configuration)，头(headers)，状态(status)和从后台过来的数据(data)。
         如果返回无效的响应对象或者 promise 会被拒绝，导致$http调用失败。
         */
        response: function (response) {
            // 进行预处理
            // 例如 JSON.parse(response)等
            // console.log(response);
            var content = response.data;
            //console.log(response);
            /*if((typeof content=='string') && content.constructor==String){
                if(content.indexOf("<title>Cloud Admin | Login</title>") > -1 && content.indexOf("<html lang=\"en\">") > -1){
                    window.location.href = "/smbr/wolf-login.html";
                }
            }*/

            return response || $q.when(response);
        },

        // 可选，拦截失败的请求
        /*
         有时一个请求发送失败或者被拦截器拒绝了。requestError拦截器会捕获那些被上一个请求拦截器中断的请求。
         它可以用来恢复请求或者有时可以用来撤销请求之前所做的配置，比如关闭遮罩层，显示进度条，激活按钮和输入框之类的。
         */
        requestError: function (rejection) {
            // 对失败的请求进行处理
            // 例如 统一的弹窗提示
            console.log("request error");
            return $q.reject(rejection);
        },

        // 可选，拦截失败的响应
        /*
         有时候我们后台调用失败了。也有可能它被一个请求拦截器拒绝了，或者被上一个响应拦截器中断了。
         在这种情况下，响应异常拦截器可以帮助我们恢复后台调用。
         */
        responseError: function (rejection) {
            // 对失败的响应进行处理
            // 例如 统一的弹窗提示
            // window.location.href = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/hbr/index.html";
            console.log(rejection);
            return $q.reject(rejection);
        }
      };
  }])
;
