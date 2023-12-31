/**
 * Created by Administrator on 2017/4/14.
 */

//定义一个模块，一个页面只能定义一个模块，但一个模块可以定多个控制器和服务
var myApp =angular.module('myApp',[],function($provide){
    //自定义服务,可定义多个，模块启动的时候就执行，这种定义方式不常用，有简便快捷的方法（直接用myApp.factory()和myApp.service()可以产生一样的效果）
    $provide.provider('customService',function(){
        this.$get = function(){

            return{
                message : 'customService Message'
            }
        }
    });

    $provide.provider('customService2',function(){
        this.$get = function(){

            return{
                message : 'customService2 Message'
            }
        }
    });

    //自定义工场，可以返回任意类型数据
    $provide.factory('customFactory',function(){
        return [1,2,3,4];
    });

    //自定义服务,注意，返回值必须是对象，不能是基本类型的
    $provide.service('customService3',function(){
        return ['a','b','d'];
    })


});
//自定义服务和工场的快捷方式
myApp.factory('fastDefinedFactory',function(){
    return{
        myName : "我们名字都一样"
    }
})
    //链式调用，简化书写
.service('fastDefinedService',function(){})

//自定义控制器，一个模块可定义多个,可以链式调用，
// 多个控制器之间数据共享可以通过“$scope.$$prevSibling.变量名/$scope.$$nextSibling.变量名”访问,注意访问的变量必须是引用类型的，不能是基本类型，如要访问基本类型，可将其放在一个object对象中，再访问（不建议使用这种方式共享数据，可以通过factory和service方法来共享数据）
.controller('firstController',function($scope,customService,customService2,customFactory,customService3,fastDefinedFactory){
    $scope.name = "我叫张三";
        $scope.fDF = fastDefinedFactory;
        //$scope.fastDefinedFactory = fastDefinedFactory;
    //console.log(customService);
    //console.log(customService2);
    //console.log(customFactory);
    console.log(customService3);
    console.log($scope);
})

.controller('secondController',function($scope,customService,customService2,customFactory,customService3,fastDefinedFactory){
    $scope.name = "我叫李思";
        $scope.fDF = fastDefinedFactory;
    //console.log(customService);
    //console.log(customService2);
    //console.log(customFactory);
    console.log(customService3);
    console.log($scope);

});