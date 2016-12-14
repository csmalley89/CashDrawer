"use strict";

app.controller("NavCtrl", function($scope, $location){
  $scope.navItems = [
      {url: "#/closeshop", name: "Close Shop", showState: "$parent.isOpen"},
      {url: "#/openshop", name: "Open Shop", showState: "!$parent.isOpen"},
      {url: "#/cashregister", name: "Cash Register", showState: "$parent.isOpen"},
      {url: "#/inventory", name: "Manage Inventory", showState: "$parent.isOpen"}
  ];
  $scope.isActive = (viewLocation) => viewLocation === $location.path();
});
