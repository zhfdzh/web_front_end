/**
 * Created by Administrator on 2017/6/25 0025.
 */

    var app = angular.module("app",["ngRoute"]);

app.controller("allMenu",function($rootScope,$scope){
        console.log('allMenu');
        $rootScope.backgroundClass = "allMenu";
    })
    .controller("firstPage",function($rootScope,$scope){
        console.log('firstPageBox');
        $rootScope.backgroundClass = "firstPage";
    })
    .controller("gongLue",function($rootScope,$scope){
        console.log('gongLue');
        $rootScope.backgroundClass = "gongLue";
    })
    .controller("sheQu",function($rootScope,$scope){
        console.log('sheQu');
        $rootScope.backgroundClass = "sheQu";
    });


