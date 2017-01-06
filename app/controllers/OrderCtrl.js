"use strict";

app.controller("OrderCtrl", function($scope, InventoryFactory, $location){
  $scope.currentOrder = {};
  $scope.products = [];
  $scope.showPayment = false;
  $scope.hideTrans = false;

  $scope.addItemToOrder = function (product){
    console.log("product", product);
    if (!product.purchaseNumber || product.quantity > product.purchaseNumber) {
      product.purchaseNumber = product.purchaseNumber ? product.purchaseNumber += 1 : 1;
      $scope.currentOrder[product.productId]=product;
    }
    console.log("currentOrder", $scope.currentOrder);
    $scope.lineTotal(product);
    $scope.orderTax(product);
    $scope.orderSubtotal(product);
    $scope.orderTotal(product);
  };

  $scope.lineTotal = (product) => {
    $scope.lineSubtotal = (product.price * product.purchaseNumber);
  };

  $scope.orderTax = (product) => {
    $scope.transactionTax = (product.taxRate * product.price);
  };

  $scope.orderSubtotal = (product) => {
    $scope.transactionSubtotal = ($scope.lineSubtotal + $scope.transactionTax);
  };

  $scope.orderTotal = (product) => {
    $scope.transactionTotal = ($scope.transactionSubtotal + $scope.transactionTax);
  };

  $scope.payment = () => {
    $scope.showPayment = true;
    $scope.hideTrans = true;
  };

  $scope.changeDue = () => {
    $scope.orderChange = ($scope.currentOrder.CashRecieved - $scope.transactionTotal);
  };

  InventoryFactory.getProductList()
  .then(function(productCollection) {
    $scope.products = productCollection;
  });



});

