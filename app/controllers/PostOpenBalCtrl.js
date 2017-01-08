"use strict";

app.controller("PostOpenBalCtrl", function($scope, InventoryFactory, $location){

  $scope.goToInventory = function(){
    $location.url('/inventory');
  };

  $scope.goToRegister = function(){
    $location.url('/cashregister');
  };
});
