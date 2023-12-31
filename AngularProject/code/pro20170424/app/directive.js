/**
 * Created by Administrator on 2017/4/15.
 */
//自定义一个过滤器
angular.module('filterApp',[],function($compileProvider){
    $compileProvider.directive('customTags',function(){
        return {
            restrict:'ECMA',
            //默认只是替换节点内容，所以custom-tags标签还会在页面
            template:'<div>custom-tags-html</div>',
             //设置为true以后，会替换节点，此时custom-tags就没啦，通常restrict设置为E（元素）时，节点就是多余的，所以通常设置replace为true,注意设置为true时，template里面的内容必须要html标签包裹，不可以只有字符串
             replace:true
        }
    });
})
    .directive('customTags2',function(){
        return {
            restrict: 'ECMA',
            //templateUrl不仅可以是一个Url地址的文件，还可以是text/ng-template 对应的script标签的id名
            //templateUrl: 'template/other.html',
            templateUrl: 'customTags2',
            replace: true
          }
        })
    .directive('customTags3',function(){
        return {
            restrict: 'ECMA',
            //transclude设置为ture时，会将被替换的数据放到指定ng-transclude属性的标签中
            templateUrl: '<div>新数据 <span ng-transclude></span></div>',
            replace: true,
            transclude:true,
            //设置优先级，优先执行替换
            prioity:-1,
            //小于prioity的directive都不会执行
            terminal:true
        }
    })
    .directive('customTags3',function(){
        return {
            restrict: 'ECMA',
            //transclude设置为ture时，会将被替换的数据放到指定ng-transclude属性的标签中
            templateUrl: '<div>新数据 <span ng-transclude></span></div>',
            replace: true,
            transclude:true,
            //设置优先级，优先执行替换
            prioity:-1,
            //小于prioity的directive都不会执行
            terminal:true
        }
    })
    .directive('customTags4',function(){
        return {
            restrict: 'ECMA',
            //transclude设置为ture时，会将被替换的数据放到指定ng-transclude属性的标签中
            templateUrl: '<div>新数据 <span ng-transclude></span></div>',
            replace: true,
            transclude:true,
            prioity:-1,
            terminal:true,
            //表示依赖指定指令，可调用指令的数据和方法
            requir:"指令名",
            //相当于app.controller()定义的
            controller:function($scope){

                $scope.key = $scope.a();
            },
            //给controller起别名
            controllerAs:"controllerNickame"   ,
            //创建一个有继承链的独立作用域
            //scope:true,
            //当scope为对象时，创建一个没有有继承链的独立作用域，有parentScope但是享受不到parentScope的数据
            scope:{
                //用&符号，可以将父元素的指定属性封装成函数赋值给a，在上面的controller中以函数的形式调用,驼峰式命名的属性名记得在html中以“-”小写分隔，类似指令的写法
                a:"&属性名",
                //双向绑定 ，属性名 =“父元素属性名”
                b:"=属性名",
                //只能单向读取父元素属性值，注意只能是简单类型的数据，不能是对象，在html标签属性中定义属性的记得要用 属性名 =“{{父元素属性名}}”
                a:"@属性名"

            },

            //返回Link
            compile:function(tElements,tAttrs,transclude){

                return {
                    //表示在编译阶段之后，指令连接到子元素之前运行
                    pre: function preLink(scope,iElement,iAttrs,controller){

                    },
                    //表示所有子元素指令都连接之后才运行，一般在postLink中注册事件绑定等
                    postLink: function postLink(scope,iElement,iAttrs,controller){

                    }
                }

            },
            //单独定义link的时候相当于compile返回的postLink函数，一般在postLink中注册事件绑定等
            link:function(){

            }
        }
    })

    .controller('firstController',function($scope){

        $scope.changeStatus = function(event){

            //angular通过element（）将元素转换成Jquery对象
            angular.element(event.target).html("change");
            $scope.defaultStyle = {color:'red','margin':'50px'}

        }

    })