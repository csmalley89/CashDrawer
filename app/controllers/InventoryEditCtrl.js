"use strict";

app.controller("InventoryEditCtrl", function($scope, InventoryFactory, $location){
  $scope.title = "Update Product";
  $scope.btnText = "Update";
  $scope.newProduct = {};

  InventoryFactory.getSingleProduct($routeParams.productId)
  .then((response) => {
    $scope.newTask = response;
  });
  $scope.addNewItem = () => {
    InventoryFactory.updateProduct($routeParams.productId, $scope.newProdcut)
    .then((response) => {
      $location.url("/inventory");
    });
  };
});
