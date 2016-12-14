"use strict";

var app = angular.module("CashDrawer", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.
    when('/welcome',{
      templateUrl: 'partials/home.html',
    }).
    when('/openshop', {
      templateUrl: 'partials/cashbal.html',
      controller: 'LedgerCtrl'
    }).
    when('/closeshop', {
      templateUrl: 'partials/cashbal.html',
      controller: "LedgerCtrl"
    }).
    when('/inventory', {
      templateUrl: 'partials/inventory.html',
      controller: "ProductCtrl"
    }).
    when('/cashregister', {
      templateUrl: 'partials/register.html',
      controller: "OrderCtrl"
    }).
    otherwise('/');
});
