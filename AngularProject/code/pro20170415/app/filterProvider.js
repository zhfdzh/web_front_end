/**
 * Created by Administrator on 2017/4/15.
 */
//自定义一个过滤器
angular.module('filterApp',[],function($filterProvider,$provide,$controllerProvider){
    $provide.service('Data',function(){
        return [
            {
                name:'zahngsan',
                age:18,
                city:'shanghai'
            },
            {
                name:'lisi',
                age:20,
                city:'beijing'
            }
        ]
    });
    //自定义过滤
    $filterProvider.register('filterAge',function(){
        //注意写法
        return function(obj){
            var newObj = [];
            angular.forEach(obj, function(o){
                if(o.age>19)
                newObj.push(o);
            });
            return newObj;
        }

    });

    $controllerProvider.register('filterCon',function($scope,Data){
        $scope.Data = Data;
        console.log('daw');
    });
})

    //快捷方式
.filter('filterCity',function(){
        return function(obj){
            var newObj = [];
            angular.forEach(obj, function(o){
                if(o.city == 'shanghai')
                    newObj.push(o);
            });
            return newObj;
        }
    })
