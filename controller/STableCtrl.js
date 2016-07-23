angular.module('myApp').controller('STableCtrl', function ($scope, $http) {
    // $http.get('Directive/dummy.json').success(function(data){
    //     $scope.dummy = data;
    // })
    $scope.dummy =
    {
        "header":[{
            "userId": "UserId",
            "date": "Date",
            "inTime": "InTime",
            "outTime": "OutTime",
            "totalTime": "TotalTime",
            "intent": "Intent"
        }],
        "data": [{
            "userId": "+91234567890",
            "date": "2015-04-23",
            "inTime": "12:30 PM",
            "outTime": "0",
            "totalTime": "0",
            "intent": "attendance"
        }]
    };
    console.log($scope.dummy.header[0].userId);
    $scope.dum = {
        "header" : [{
            "date" : $scope.dummy.header[0].date,
            "inTime" : $scope.dummy.header[0].inTime,
            "outTime" : $scope.dummy.header[0].outTime,

        }],
        "data" : [{
            "date" : $scope.dummy.data[0].date,
            "inTime" : $scope.dummy.data[0].inTime,
            "outTime" : $scope.dummy.data[0].outTime,
            
        }]
    };
    console.log($scope.dum);
});