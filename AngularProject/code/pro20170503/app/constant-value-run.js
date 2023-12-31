/**
 * Created by Administrator on 2017/4/15.
 */
//自定义一个过滤器
angular.module('filterApp',[],function($provide){

})
    .config(function(){
        console.log(apiKey);
    })
    //config之后，controller等其他服务之前调用
    .run(function(){

    })

    //首先运行，可声明整个应用范围内的常量，在所有配置（config）和实例方法中均可用
.constant('apiKey',"xxxxx")
    //只能注入controller、service、factory等
.value('version','1.0')
.controller("firstController",function($scope){

    })