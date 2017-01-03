"use strict";

var app = angular.module("CashDrawer", ["ngRoute", "ui.materialize"]);
.constant("CashDrawerAPI", "http://localhost:5000/")

app.config(function($routeProvider){
  $routeProvider.
    when('/',{
      templateUrl: 'partials/demo.html',
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
