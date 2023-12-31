/**
 * Created by Administrator on 2017/4/15.
 */
angular.module('filterModule',[])
.factory('shareData',function(){
        return {
            share : 'sharedate',
            city : [
                {
                    name : '上海',
                    pity:'sahnghai'
                },
                {
                    name : '北京',
                    pity:'beijing'
                },
                {
                    name : '合肥',
                    pity:'hefei'
                }
            ]
        }
    })
.controller('filterController',function($scope,shareData,$filter){
        $scope.data = shareData;
        $scope.today = new Date();

        //控制器中使用过滤器,注意两个括号

        var number = $filter('number')(3000);
        var jsonStr = $filter('json')($scope.data);
        $scope.checkName = function(obj){
            //console.log(obj);
            if(obj.pity.indexOf('e') == -1)
            return false;
            return true;


            };
        //console.log(number);
        //console.log($scope.data);
    });