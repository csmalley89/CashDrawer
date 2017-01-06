"use strict";

app.controller("OrderCtrl", function($scope, InventoryFactory, $location){
  $scope.currentOrder = {};
  $scope.products = [];
  $scope.showPayment = false;
  $scope.hideTrans = false;

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

  $scope.lineTotal = (product) => {
    $scope.lineSubtotal = (product.price * product.purchaseNumber);
  };

  // $scope.orderTax = (product) => {
  //   $scope.transactionTax = (product.taxRate * product.price);
  // };

  // $scope.orderTotal = (product) => {
  //   $scope.transactionTotal = ($scope.transactionSubtotal + $scope.transactionTax);
  // };

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


// app.controller("OrderCtrl", function($scope, InventoryFactory, $location){
//   $scope.currentOrder = {};
//   $scope.products = [];
//   $scope.showPayment = false;
//   $scope.hideTrans = false;

//   $scope.addItemToOrder = function (product){
//     console.log("product", product);
//     if (!product.purchaseNumber || product.quantity > product.purchaseNumber) {
//       product.purchaseNumber = product.purchaseNumber ? product.purchaseNumber += 1 : 1;
//       $scope.currentOrder[product.productId]=product;
//     }
//     console.log("currentOrder", $scope.currentOrder);
//     console.log("currentOrderPrice", $scope.currentOrder);
//     $scope.lineTotal(product);
//     $scope.orderTax(product);
//     // $scope.orderSubtotal(product);
//     $scope.orderTotal(product);
//   };


//   $scope.lineTotal = (product) => {
//     $scope.lineSubtotal = (product.price * product.purchaseNumber);
//   };


//   $scope.orderTax = (product) => {
//     $scope.transactionTax = (product.taxRate * product.price);
//   };


  // $scope.transactionSubtotal = (product) => {
  //   var total = 0;
  //   for(var i = 0; i < $scope.lineSubtotal.length; i++){
  //     total += ($scope.lineSubtotal[i]);
  //   }
  //   return total;
  // };



//   $scope.orderTotal = (product) => {
//     $scope.transactionTotal = ($scope.transactionSubtotal + $scope.transactionTax);
//   };

//   $scope.payment = () => {
//     $scope.showPayment = true;
//     $scope.hideTrans = true;
//   };

//   $scope.changeDue = () => {
//     $scope.orderChange = ($scope.currentOrder.CashRecieved - $scope.transactionTotal);
//   };

//   InventoryFactory.getProductList()
//   .then(function(productCollection) {
//     $scope.products = productCollection;
//   });



// });
