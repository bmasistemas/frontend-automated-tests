describe('calculator', function() {
  beforeEach(module('calculatorApp'));

  var controller, scope;

  beforeEach(inject(function($controller, $rootScope) {
    controller = $controller;
    scope = $rootScope.$new();
  }));

  describe('sum', function() {
    it('1 + 2 should be equal 3', function() {
      var ctrl = controller('CalculatorController', {$scope: scope});
      scope.firstInput = 1;
      scope.secondInput = 2;

      scope.sum();

      expect(scope.output).toBe(3);
    });
  });

});
