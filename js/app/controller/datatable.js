'use strict'
app.controller('DataTableController', function($scope, $http, $timeout, time, obj) {
    
    $scope.query = {
        "lineNumber": 10,
        "pageNumber": 1
    };
    
    $scope.form = {
        "flag": 1, //1表示新增，2表示修改
        "title": '新增',
        "entity": {
            "id": '',
            "username": '',
            "password": '',
            "tel": '',
            "email": ''
        }
    };

    $scope.body = {
        "queryTitle": "查询条件",
        "tableTitle": "数据列表"
    };


    var tbl;
    var layer = layui.layer

    $timeout(function(){
        tbl = $('#tbl').DataTable({
            "ajax" : function (data, callback, settings) {
                //封装请求参数
                $scope.query.lineNumber = data.length;//页面显示记录条数，在页面显示每页显示多少项的时候
                $scope.query.pageNumber = (data.start / data.length)+1;//当前页码
                var returnData = {};
                returnData.recordsTotal = 0;//返回数据全部记录
                returnData.recordsFiltered = 0;//后台不实现过滤功能，每次查询均视作全部结果
                returnData.data = [];//返回的数据列表
                // $http.post($scope.serverUrl + 'user/page/list', $scope.query).then(function(response){
                //     // console.log(response.data);
                //     var resultData = response.data.data;
                //     returnData.recordsTotal = resultData.totalCount;//返回数据全部记录
                //     returnData.recordsFiltered = resultData.totalCount;//后台不实现过滤功能，每次查询均视作全部结果
                //     returnData.data = resultData.data;//返回的数据列表
                //     callback(returnData);
                // }, 
                // function(err){
                //     alert("数据加载请求异常");
                // });
                var resultData = [
                    {
                        "id": 1,
                        "username": "123",
                        "tel": "123",
                        "type": "1",
                        "email": "18771933975@163.com",
                        "createTime": 1538047856943
                    },
                    {
                        "id": 2,
                        "username": "wind",
                        "tel": "123",
                        "type": "2",
                        "email": "18771933971@163.com",
                        "createTime": 1538047856942
                    },
                    {
                        "id": 3,
                        "username": "follow",
                        "tel": "123",
                        "type": "2",
                        "email": "18771933975@163.com",
                        "createTime": 1538047856843
                    }
                ];
                returnData.recordsTotal = resultData.length;//返回数据全部记录
                returnData.recordsFiltered = resultData.length;//后台不实现过滤功能，每次查询均视作全部结果
                returnData.data = resultData;//返回的数据列表
                callback(returnData);
            },
            "serverSide":true,
            "language":$scope.datatables_lang, //提示信息
            "renderer": "bootstrap", //渲染样式：Bootstrap和jquery-ui
            "pagingType": "full_numbers", //分页样式：simple,simple_numbers,full,full_numbers
            "bFilter": true,
            "bSort": false,
            /*"scrollX": true,*/
            "fnInitComplete":function (oSettings, json) {
            
            },
            "columns": [
                {
                    "targets": 0,
                    "render": function(data, type, row){
                        return '<label class="i-checks m-b-none"><input type="checkbox"><i></i></label>';
                    }
                },
                {"data": "username"},
                {"data": "tel"},
                {
                    "render": function(data, type, row){
                        return row.type == 1 ? '系统用户' : '普通用户';
                    }
                },
                {"data": "email"},
                {
                    "render": function(data, type, row){
                        return time.format(row.createTime);
                    }
                },
                {
                    "render": function(data, type, row){
                        var html = '<span class="btn btn-info btn-sm" name="edit">编辑</span>';
                        if(row.type == 2){
                            html += '<span class="btn btn-danger btn-sm" style="margin-left:3px;" name="del">删除</span>';
                        }
                        return html;
                    }
                },
            ]
        })
    }, 0);

    $('#tbl tbody').on('click', 'span[name="edit"]', function(e){
        var entity = tbl.row($(e.target).parents("tr")).data();
        $scope.form.flag = 2;
        $scope.form.title = '修改';
        obj.copy(entity, $scope.form.entity);
        $scope.$apply();
        $("#add").modal("show");
    });

    $('#tbl tbody').on('click', 'span[name="del"]', function(e){
        var entity = tbl.row($(e.target).parents("tr")).data();
        console.log(entity);
        layer.msg('hello world', {icon: 1});
        // $http.delete($scope.serverUrl + "user/delete/" + entity.id, {}).then(function(response){
        //     tbl.ajax.reload();
        // }, 
        // function(err){
        //     toaster.pop('info', "title", "请求异常");
        // });
    });

    $scope.add = function(){
        $scope.form.flag = 1;
        $scope.form.title = '新增';
        $scope.form.entity = {};
        $("#add").modal("show");
    };

    $scope.search = function(){
        tbl.ajax.reload();
    };

    $scope.reset = function(){
        $scope.query = {
            "lineNumber": 10,
            "pageNumber": 1
        };
        tbl.ajax.reload();
    }

    $scope.save = function(){
        var url =  $scope.form.flag == 1 ? "user/register" : "user/update";
        $http.post($scope.serverUrl + url, $scope.form.entity).then(function(response){
            tbl.ajax.reload();
            $("#add").modal("hide");
        }, 
        function(err){
            
        });
    }


});