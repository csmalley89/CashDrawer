"use strict";

app.controller("OrderCtrl", function($scope, InventoryFactory, $location){
  $scope.currentOrder = {};
  $scope.products = [];

  $scope.addItemToOrder = function (product){
    console.log("product", product);
    if (!product.purchaseNumber || product.quantity > product.purchaseNumber) {
      product.purchaseNumber = product.purchaseNumber ? product.purchaseNumber += 1 : 1;
      $scope.currentOrder[product.productId]=product;
    }
    console.log("currentOrder", $scope.currentOrder);
    $scope.lineTotal(product);
  };

 $scope.lineTotal = (product) => {
    $scope.lineSubtotal = (product.price * product.purchaseNumber);
 };



  // $scope.addItemToOrder = function (product){
  //   if ($scope.product.quantity >= 1) {
  //     return;
  //   }
  //   var clickedItem = currentOrder[product.productId];
  //   clickedItem++;
  //   console.log("clickedItem", clickedItem);
  //   console.log("currentOrder", currentOrder);

  // };

  InventoryFactory.getProductList()
  .then(function(productCollection) {
    $scope.products = productCollection;
  });



});

