/**
 * Directive to check data is exist or not
 */

angular.module('myApp').directive('uniqueUsername', function($http,$q) {

    return {
        restrict: 'EA',
        require: 'ngModel',
        scope: {
            url : '@'
        },
        link: function (scope, element, attrs, ngModel) {

            var url;
            var deferred=$q.defer();
            attrs.$observe('url',function(value){
                url=value;
            });
            ngModel.$asyncValidators.unique = function (username) {

                var deferred=$q.defer();
                $http.get(url+username).then(function(response){
                    if(response.data=="user exist"){
                        console.log("rejetedf");
                        deferred.reject();
                    }
                     else{
                        console.log("resolved");
                        deferred.resolve();
                    }
                },
                function(err){
                    deferred.reject();
                });
                return deferred.promise;
            }//end of promise function
        }//end of link function
    }
});//end of directive


