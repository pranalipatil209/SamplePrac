/**
 * this is controller for form
*/
angular.module('myApp').controller('formController',['$scope','$state',function($scope,$state){
    $scope.title="This is form";
    var data={
        username: $scope.username
    };
    $scope.table = function(){
        $state.go('table');
    }
}]);
