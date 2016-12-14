"use strict";

app.controller("NavCtrl", function($scope, $location){
  $scope.searchText = SearchTermData;
  $scope.navItems = [
      {url: "#/close-shop", name: "Close Shop", showState: "$parent.isOpen"},
      {url: "#/open-shop", name: "Open Shop", showState: "!$parent.isOpen"},
      {url: "#/cash-register", name: "Cash Register", showState: "$parent.isOpen"},
      {url: "#/inventory", name: "Manage Inventory"}
  ];
  $scope.isActive = (viewLocation) => viewLocation === $location.path();
});
