angular.module('myApp').directive('tableGenerator', function () {

    return {
        restrict: 'E',
        // scope : {
        //     tableGenerator : '=resource'
        // },
        templateUrl : 'template/table.html',
        compile : function(tElements,tAttributes){
        },
        link: function ($scope, element, attribute) {
            var dd = $scope.dum;

            // element.html("<table>" +
            //     "<thead>" + "<tr ng-repeat='a in dd.header'>" +
            //     "<th ng-repeat='b in a'>{{b}}</th>" + "</tr>"
            //     + "</thead>" +
            //     "<tbody>" +
            //     "<tr ng-repeat='val in dd.data'>" +
            //     "<td ng-repeat='a in val'><input value='{{a}}'></td>" +
            //     "</tr>" +
            //     "</tbody>" +
            //     "</table>"
            // );
        }
    }

});