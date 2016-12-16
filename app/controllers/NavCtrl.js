"use strict";

app.controller("NavCtrl", function($scope, $location, SearchTermData){
  $scope.navItems = [
      {url: "#/closeshop", name: "Close Shop"},
      {url: "#/openshop", name: "Open Shop"},
      {url: "#/cashregister", name: "Cash Register"},
      {url: "#/inventory", name: "Manage Inventory"}
  ];
  $scope.isActive = (viewLocation) => viewLocation === $location.path();
});
