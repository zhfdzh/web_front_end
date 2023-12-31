/**
 * Created by Administrator on 2017/4/14.
 */

var myApp =angular.module('myApp',[],['$provide',function(a){

}])
    //显示注入
    .factory('customService',function($window){

    })
    //显示注入,代码压缩可能会导致$scope变成别的变量名
.controller("firstController",function($scope){

    })

    // 隐示注入,a代表$scope，b代表$filter
    .controller("secondContrllor",['$scope','$filter',function(a,b){

    }]);


function otherController(a){
    console.log(a);
}
// 为上面函数式的controller注入$scope对象
otherController.$inject = ['$scope'];