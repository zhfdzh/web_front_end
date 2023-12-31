/**
 * Created by Administrator on 2017/6/25 0025.
 */
app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');  //消除地址栏出现在锚点前的乱码
    $routeProvider
        .when("/allMenu",{
        templateUrl:"views/contentBox.html",
        controller:"allMenu"
    })
        .when("/firstPage",{
            templateUrl:"views/contentBox.html",
            controller:"firstPage"
        })
        .when("/gongLue",{
            templateUrl:"views/contentBox.html",
            controller:"gongLue"
        })
        .when("/sheQu",{
            templateUrl:"views/contentBox.html",
            controller:"sheQu"
        })
        .otherwise({redirectTo:'/allMenu'});
});
