"use strict";

app.controller('LedgerCtrl', function($scope, $window, $location, InventoryFactory){
  $scope.cashDrawerTotal = 0;


  $scope.cashDrawer = {
    hun: "",
    fif: "",
    twe: "",
    ten: "",
    fiv: "",
    two: "",
    one: "",
    sdl: "",
    hlf: "",
    qtr: "",
    dme: "",
    nck: "",
    pny: ""
  };

  $scope.total = () => {
    $scope.cashDrawerTotal =
    ([($scope.cashDrawer.hun * 100)+
    ($scope.cashDrawer.fif * 50)+
    ($scope.cashDrawer.twe * 20)+
    ($scope.cashDrawer.ten * 10)+
    ($scope.cashDrawer.fiv * 5)+
    ($scope.cashDrawer.two * 2)+
    ($scope.cashDrawer.one * 1)+
    ($scope.cashDrawer.sdl * 1)+
    ($scope.cashDrawer.hlf * 0.5)+
    ($scope.cashDrawer.qtr * 0.25)+
    ($scope.cashDrawer.dme * 0.1)+
    ($scope.cashDrawer.nck * 0.05)+
    ($scope.cashDrawer.pny * 0.01)]*100)/100;
    $scope.showContinue = true;
  };

  $scope.showContinue = false;

  $scope.clearTotal = () => {
    $scope.cashDrawerTotal = 0;
  };

  $scope.openDrawer = () => {
    InventoryFactory.postOpenDrawer($scope.cashDrawerTotal)
    .then (()=> {
      $location.url('/openshop2');
    });
  };

  // $scope.openDrawer = () => {
  //   $location.url('/openshop2')
  // };

  $scope.closeDrawer = () => {
    InventoryFactory.postCloseDrawer($scope.cashDrawerTotal)
    .then (()=> {
      $location.url('/cashregister');
    });
  };

});
