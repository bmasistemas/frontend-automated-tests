describe('calculator', function() {
  beforeEach(module('calculatorApp'));

  var controller;

  beforeEach(inject(function($controller) {
    controller = $controller;
  }));

  describe('sum', function() {
    var ctrl, scope;

    beforeEach(inject(function($rootScope){
      scope = $rootScope.$new();
      ctrl = controller('CalculatorController', {$scope: scope});
    }));

    it('1 + 2 should be equal 3', function() {
      scope.firstInput = 1;
      scope.secondInput = 2;

      scope.sum();

      expect(scope.output).toBe(3);
    });
  });

});
