"use strict";

app.controller("OrderCtrl", function($scope, InventoryFactory, OrderFactory, $location, $window, SearchTermData){
  $scope.searchText = SearchTermData;
  $scope.currentOrder = {};
  $scope.products = [];
  $scope.showPayment = false;
  $scope.hideTrans = false;
  $scope.order = {
    subTotal: $scope.orderSubtotal,
    tax: $scope.orderTax
  };

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



/* NOT WORKING Button to delete individual item from current order, and to clear current order */
  $scope.delItem = () => {
    console.log("x button");
  };

  // $scope.delFromOrder = (product) => {
  //   delete product[key]
  // };
  // $scope.cancelOrder = (product) => {
  //   $window.localStorage.clear(product);
  // };



// Changes line total if user changes qty box NOT hooked up to SUBTOTAL yet
  $scope.lineTotal = (product) => {
    $scope.lineSubtotal = (product.price * product.purchaseNumber);
  };
// Hides Subtotal and Tax display, and shows Cash Recieved Screen to complete transaction. Then posts subtotal and tax to order table and gets orderId.
  $scope.payment = () => {
    $scope.showPayment = true;
    $scope.hideTrans = true;
    // console.log($scope.currentOrder);
    // for (let key in $scope.currentOrder) {
    //   $scope.productId = $scope.currentOrder[key].productId;
    //   console.log("productId", $scope.productId);
    // }
  };

  $scope.completeOrder = () => {
    console.log($scope.currentOrder);
    $scope.order.subTotal = $scope.orderSubtotal;
    $scope.order.tax = $scope.orderTax;
    OrderFactory.postNewOrder($scope.order)
    .then ((data)=>{
      $scope.order.orderId = data.data.orderId;
      for (let key in $scope.currentOrder) {
        $scope.productId = $scope.currentOrder[key].productId;
        $scope.purchaseNumber = $scope.currentOrder[key].purchaseNumber;
        $scope.name = $scope.currentOrder[key].name;
        $scope.price = $scope.currentOrder[key].price;
        $scope.cost = $scope.currentOrder[key].cost;
        $scope.quantity = $scope.currentOrder[key].quantity;
        $scope.isTaxable = $scope.currentOrder[key].isTaxable;
        $scope.taxRate = $scope.currentOrder[key].taxRate;
        $scope.qtyLeft = ($scope.quantity - $scope.purchaseNumber);
        let editedProduct = {
          productId: $scope.productId,
          name: $scope.name,
          price: $scope.price,
          cost: $scope.cost,
          quantity: $scope.qtyLeft,
          isTaxable: $scope.isTaxable,
          taxRate: $scope.taxRate
        };
        InventoryFactory.updateProduct($scope.productId, editedProduct)
        .then((data)=>{
        });
        let lineitem = {
          productId: $scope.productId,
          orderId: $scope.order.orderId,
          quantity: $scope.purchaseNumber
        };
        OrderFactory.postNewLineItem(lineitem)
        .then((data)=>{
        });
      }
    });
  };

  $scope.changeDue = () => {
    $scope.orderChange = ($scope.order.CashRecieved - $scope.orderTotal);
  };


});


