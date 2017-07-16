/**
 * Created by Administrator on 2017/7/11 0011.
 */

angular.module("myApp",[])
.controller("mainController",function($scope){
        $scope.userdata = {};

        $scope.submitForm = function(){
            console.log($scope.userdata);
            console.log($scope.signUpForm);
            if($scope.signUpForm.$invalid){
                alert("please check your input infomation");
            }
        }
    })
.directive('compare',function(){
        var o = {};
        o.strict = 'AE';
        o.scope = {
            orgText: '=compare'
        }
        o.require = 'ngModel';
        o.link = function(sco,ele,att,con){
            con.$validators.compare = function(v){
                return y == sco.orgText;
            }
            sco.watch('orgText',function(){});
        }

        return o;
    });