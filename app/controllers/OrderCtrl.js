"use strict";

app.controller("OrderCtrl", function($scope, InventoryFactory, $location){
  $scope.currentOrder = {};
  $scope.products = [];
  $scope.showPayment = false;
  $scope.hideTrans = false;

// Grabs Products from inventory
  InventoryFactory.getProductList()
  .then(function(productCollection) {
    $scope.products = productCollection;
  });
// Onclick adds products to the lineitems transaction display
  $scope.addItemToOrder = function (product){
    if (!product.purchaseNumber || product.quantity > product.purchaseNumber) {
      product.purchaseNumber = product.purchaseNumber ? product.purchaseNumber += 1 : 1;
      $scope.currentOrder[product.productId]=product;
    }
    console.log("currentOrder", $scope.currentOrder);
    $scope.orderSubtotal = 0;
    $scope.orderTax = 0;
    for (let key in $scope.currentOrder) {
      $scope.orderSubtotal += $scope.currentOrder[key].price * $scope.currentOrder[key].purchaseNumber;
      $scope.orderTax += $scope.currentOrder[key].price * $scope.currentOrder[key].purchaseNumber * $scope.currentOrder[key].taxRate;
    }
    console.log("orderSubtotal", $scope.orderSubtotal);
    $scope.orderTotal = $scope.orderSubtotal + $scope.orderTax;
    $scope.lineTotal(product);
  };
// Changes line total if user changes qty box NOT hooked up to SUBTOTAL yet
  $scope.lineTotal = (product) => {
    $scope.lineSubtotal = (product.price * product.purchaseNumber);
  };
// Hides Subtotal and Tax display, and shows Cash Recieved Screen to complete transaction
  $scope.payment = () => {
    $scope.showPayment = true;
    $scope.hideTrans = true;
  };
  $scope.changeDue = () => {
    $scope.orderChange = ($scope.currentOrder.CashRecieved - $scope.orderTotal);
  };




});


