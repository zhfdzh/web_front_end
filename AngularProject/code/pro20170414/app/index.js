/**
 * Created by Administrator on 2017/4/14.
 */
var cartController = function($scope){
    $scope.cart = [
        {
            id:1000,
            name:"iphone",
            quantity:'3',
            price:4300
        },
        {
            id:122,
            name:"huawei",
            quantity:'5',
            price:3300
        },
        {
            id:23333,
            name:"meizu",
            quantity:'2',
            price:2300
        },
        {
            id:33344,
            name:"xiaomi",
            quantity:'1',
            price:1300
        }
    ];

    $scope.totalPrice = function(){
        var total = 0;
        angular.forEach($scope.cart,function(item){
            total += item.quantity * item.price;
        });
        return total;
    }
    $scope.totalQuantity = function(){
        var total = 0;
        angular.forEach($scope.cart,function(item){
            total += parseInt(item.quantity);
        });
        return total;
    }

    $scope.remove = function(id){
        var index = -1;
        angular.forEach($scope.cart,function(item,key){
            if(item.id == id){
                index = key;
            }
        });
        if(index != -1){
            $scope.cart.splice(index,1);
        }
    }

    $scope.add = function (id){
        var index = -1;
        angular.forEach($scope.cart,function(item,key){
            if(item.id == id){
               index = key;
            }
        });
        if(index != -1){
            ++$scope.cart[index].quantity;
        }
    }

    $scope.reduce = function (id){
        var index = -1;
        angular.forEach($scope.cart,function(item,key){
            if(item.id == id){
                index = key;
            }
        });
        if(index != -1){
            if($scope.cart[index].quantity>1){
                --$scope.cart[index].quantity;
            }else {
                var conf = confirm("确定要删除该商品么")
               if(conf){
                   $scope.cart.splice(index,1);
               }
            }
        }
    }

    $scope.$watch('cart',function(newValue,oldValue){
        angular.forEach(cart,function(item,key){
            if(item.quantity<1){
                var conf = confirm("确定要删除商品名么？");
                if(conf){
                    $scope.remove(item.id);
                }else{
                    item.quantity = oldValue[key].quantity;
                }
            }
        })
        if(newValue ){}


    })

}
