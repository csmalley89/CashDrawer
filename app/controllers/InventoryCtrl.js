"use strict";
app.controller("InventoryCtrl", function($scope, $http, $location, $routeParams, InventoryFactory, SearchTermData){
  $scope.searchText = SearchTermData;
  $scope.products = [];

  InventoryFactory.getProductList()
  .then(function(productCollection) {
    $scope.products = productCollection;
  });

  $scope.goToAddProduct = function(){
    $location.url('/addproduct');
  };

  $scope.goToEditProduct = function(id){
    $location.url(`/editproduct/${id}`);
  };

});


app.controller("InventoryNewCtrl", function($scope, InventoryFactory, $location, $routeParams){
  $scope.title = "Add a New Product";
  $scope.btnText = "Save";
  $scope.redBtn = "Cancel";
  $scope.product = {
    name: "",
    price: "",
    cost: "",
    quantity: "",
    isTaxable: false,
    taxRate: 0
  };

  $scope.addNewItem = function(){
    InventoryFactory.postNewProduct($scope.product)
    .then(function(){
      $location.url('/inventory');
    });
  };
  $scope.deleteItem = () => {
    $location.url("/inventory");
  };

});


app.controller("InventoryEditCtrl", function($scope, InventoryFactory, $location, $routeParams){
  $scope.title = "Update Product";
  $scope.btnText = "Update";
  $scope.redBtn = "Delete Product";
  $scope.product = {};

  InventoryFactory.getSingleProduct($routeParams.productId)
  .then((response) => {
    $scope.product = response;
  });
  $scope.addNewItem = () => {
    InventoryFactory.updateProduct($routeParams.productId, $scope.product)
    .then((response) => {
      $location.url("/inventory");
    });
  };
  $scope.deleteItem = () => {
    InventoryFactory.deleteProduct($routeParams.productId)
    .then((response)=>{
      $location.url("/inventory");
    });
  };
});

