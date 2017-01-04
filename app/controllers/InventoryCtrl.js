"use strict";
app.controller("InventoryCtrl", function($scope, InventoryFactory, $location){

  $scope.goToAddProduct = function(){
    $location.url('/addproduct');
  };

});

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
