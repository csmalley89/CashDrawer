"use strict";

app.controller("OrderCtrl", function($scope, InventoryFactory, $location){
  $scope.products = [];

  InventoryFactory.getProductList()
  .then(function(productCollection) {
    $scope.products = productCollection;
  });

});

