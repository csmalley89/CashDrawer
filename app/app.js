"use strict";

var app = angular.module("CashDrawer", ["ngRoute", "ui.materialize"])
.constant("CashDrawerAPI", "http://localhost:5000/");

app.config(function($routeProvider){
  $routeProvider.
    when('/',{
      templateUrl: 'partials/demo.html',
    }).
    when('/openshop', {
      templateUrl: 'partials/cashbal.html',
      controller: 'LedgerCtrl'
    }).
    when('/openshop2', {
      templateUrl: 'partials/postOpenDrawerBal.html',
      controller: 'PostOpenBalCtrl'
    }).
    when('/inventory', {
      templateUrl: 'partials/inventory.html',
      controller: 'InventoryCtrl'
    }).
    when('/addproduct', {
      templateUrl: 'partials/product-form.html',
      controller: 'InventoryNewCtrl'
    }).
    when('/editproduct', {
      templateUrl: 'partials/inventory.html',
      controller: 'InventoryEditCtrl'
    }).
    when('/closeshop', {
      templateUrl: 'partials/cashbal.html',
      controller: 'LedgerCtrl'
    }).
    when('/cashregister', {
      templateUrl: 'partials/register.html',
      controller: 'OrderCtrl'
    }).
    otherwise('/');
});
