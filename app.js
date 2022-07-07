(function () {
    'use strict'

    angular.module('myFirstApp', [])
        .controller('MsgController', MsgController)

        .controller('MyFirstController', function ($scope) {
            $scope.name = "Mike"
            $scope.sayHello = function () {
                return "Hello World!"
            }
        })

        .controller('NameCalculatorController', function ($scope) {
            $scope.name = "Mike"
            $scope.totalValue = 0

            $scope.displayNumeric = function () {
                $scope.totalValue = calculateNumericForString($scope.name)
            }
            function calculateNumericForString(string) {
                var totalStringValue = 0
                for (let i = 0; i < string.length; i++) {
                    totalStringValue += string.charCodeAt(i)
                }
                return totalStringValue
            }
        })

        .controller('DependencyInjectionController', DependencyInjectionController)
    //One of s everal ways to inject services into the controller function
    //Want to do this so that minifiers don't screw up names of hard-coded angular variables
    DependencyInjectionController.$inject = ['$scope', '$filter']

    function DependencyInjectionController($scope, $filter, $injector) {
        $scope.name = "Mike"

        $scope.upper = function () {
            let upCase = $filter('uppercase')
            $scope.name = upCase($scope.name)
        }

        // console.log($injector.annotate(DependencyInjectionController))
    }

    function AnnotateMe(name, job, blah) {
        return "Blah"
    }
    // console.log(DependencyInjectionController.toString())

    function MsgController($scope) {
        $scope.stateOfBeing = 'hungry'

        $scope.feedMike = function () {
            $scope.stateOfBeing = $scope.stateOfBeing === "full" ? "hungry" : "full"
        }
    }

})();