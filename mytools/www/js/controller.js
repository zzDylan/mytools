angular.module('starter.controller',['ngCordova'])
        .controller('toolsCtrl',function($scope,$state){
                   $scope.user={};
                   $scope.user.choice='';
                   $scope.setStorage=function(){
                       window.localStorage.setItem('userchoice',$scope.user.choice);
                       $state.go('select');
                   }
               })
        
        .controller('selectCtrl',function($scope,$stateParams,$cordovaSms){
            $scope.user={};
            $scope.user.select='';
            $scope.user.choice=window.localStorage.getItem('userchoice');
            $scope.sendSms=function(){
                var options = {
                    replaceLineBreaks: false, // true to replace \n by a new line, false by default
                    android: {
                    //  intent: 'INTENT'  // send SMS with the default SMS app
                    intent: ''        // send SMS without open any other app
                    }                   
            } 
            
              if($scope.user.choice=='A'){
                $scope.phonenumber='10001';
                if($scope.user.select=='a'){
                    $scope.content='102';
                }
                else if($scope.user.select=='b'){
                    $scope.content='1081';
                }
            }
            else if($scope.user.choice=='B'){
                $scope.phonenumber='10086';
                if($scope.user.select=='a'){
                    $scope.content='CXYE';
                }
                else if($scope.user.select=='b'){
                    $scope.content='CXGPRS';
                }
                
            }
            else if($scope.user.choice=='C'){
                $scope.phonenumber='10010';
                if($scope.user.select=='a'){
                    $scope.content='102';
                }
                else if($scope.user.select=='b'){
                    $scope.content='5102';
                }
            }
            
            
            $cordovaSms
            .send($scope.phonenumber,$scope.content, options)
            .then(function() {
              // Success! SMS was sent
                alert('查询信息发送成功!');
            }, function(error) {
              // An error occurred
                 alert('查询信息发送失败!');
            });
            }
            
        })
