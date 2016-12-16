"use strict"

app.controller('LedgerCtrl', function($scope, $window){
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
    ($scope.cashDrawer.hlf * .5)+
    ($scope.cashDrawer.qtr * .25)+
    ($scope.cashDrawer.dme * .1)+
    ($scope.cashDrawer.nck * .05)+
    ($scope.cashDrawer.pny * .01)]*100)/100
  };

})