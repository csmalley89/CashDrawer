"use strict";
app.controller("InventoryCtrl", function($scope, $http, $location, $routeParams, InventoryFactory){
  $scope.products = [];

  InventoryFactory.getProductList()
  .then(function(productCollection) {
    $scope.products = productCollection;
  });

  // $scope.getProductList = function () {
  //   $http.get('http://localhost:5000/products')
  //     .then(function (products) {
  //       $scope.products = products;

  //       console.log(products);
  //     });
  // };

  $scope.goToAddProduct = function(){
    $location.url('/addproduct');
  };

});


app.controller("InventoryNewCtrl", function($scope, InventoryFactory, $location, $routeParams){
  $scope.title = "Add a New Product";
  $scope.btnText = "Save";
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

});


app.controller("InventoryEditCtrl", function($scope, InventoryFactory, $location, $routeParams){
  $scope.title = "Update Product";
  $scope.btnText = "Update";
  $scope.newProduct = {};

  InventoryFactory.getSingleProduct($routeParams.productId)
  .then((response) => {
    $scope.newTask = response;
  });
  $scope.addNewItem = () => {
    InventoryFactory.updateProduct($routeParams.productId, $scope.prodcut)
    .then((response) => {
      $location.url("/inventory");
    });
  };
});

