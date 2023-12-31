/**
 * Created by Administrator on 2017/4/15.
 */
angular.module('product',[])
    .service('productData',function(){
        return [
            {
                id:1,
                name:'iphone',
                price:6088
            },
            {
                id:2,
                name:'ipad',
                price:4888
            },
            {
                id:3,
                name:'imac',
                price:12888
            },
            {
                id:4,
                name:'pad mini',
                price:2888
            },
            {
                id:5,
                name:'iphone se',
                price:3888
            },
        ]
})
    .controller('eController',function($scope,productData){
        $scope.productData = productData;
        $scope.orderType = "id";
        $scope.order = "-";
        $scope.changeOrder = function(type){
            $scope.orderType = type;
            if($scope.order == '')
                $scope.order = "-";
            else if ($scope.order == "-")
                $scope.order = "";
        }

    })

