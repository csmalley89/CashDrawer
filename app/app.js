"use strict";

var app = angular.module("CashDrawer", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.
    when('/',{
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    }).
    when('/open-shop', {
      templateUrl: 'partials/cashbal.html',
      controller: 'LedgerCtrl'
    }).
    when('/close-shop', {
      templateUrl: 'partials/cashbal.html',
      controller: "LedgerCtrl"
    }).
    when('/inventory', {
      templateUrl: 'partials/inventory.html',
      controller: "ProductCtrl"
    }).
    when('/cash-register', {
      templateUrl: 'partials/register.html',
      controller: "OrderCtrl"
    }).
    otherwise('/');
});
