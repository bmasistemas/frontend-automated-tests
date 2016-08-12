(function(){
  'use strict';

  function CalculatorController($scope) {
    $scope.firstInput = 0;
    $scope.secondInput = 0;
    $scope.output = 0;

    $scope.sum = function() {
      $scope.output = $scope.firstInput + $scope.secondInput;
    };
  }

  CalculatorController.$inject = ['$scope'];

  calculatorApp.controller('CalculatorController', CalculatorController);

})();
