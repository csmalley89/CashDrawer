"use strict";

app.controller("InventoryNewCtrl", function($scope, InventoryFactory, $location){
  $scope.title = "Add a New Product";
  $scope.btnText = "Save";
  $scope.newProduct = {
    name: "",
    price: "",
    cost: "",
    qty: "",
    isTaxable: false,
    taxRate: ""
  };

  $scope.addNewItem = function(){
    InventoryFactory.postNewProduct($scope.newProduct)
    .then(function(){
      $location.url('/inventory');
    });
  };

});
