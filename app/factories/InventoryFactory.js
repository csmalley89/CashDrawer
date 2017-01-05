"use strict";

app.factory("InventoryFactory", (CashDrawerAPI, $q, $http) => {

  let getProductList = () => {
    let products = [];
    return $q((resolve, reject) => {
      $http.get('http://localhost:5000/products')
      .then((productObject) => {
        resolve(productObject.data);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  let getSingleProduct = (productId) => {
    return $q((resolve, reject) => {
      $http.get(`${CashDrawerAPI}products/${productId}`)
      .then((productObject) =>{
        resolve(productObject.data);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  let postNewProduct = (newProduct) => {
    return $q( (resolve, reject) => {
      $http.post(`${CashDrawerAPI}products`, JSON.stringify(newProduct))
        .then((objFromDb) => {
          resolve(objFromDb);
        })
      .catch((error)=>{
        reject(error);
      });
    });
  };

  let updateProduct = (productId, editedProduct) => {
    return $q((resolve, reject) => {
      $http.put(`${CashDrawerAPI}products/${productId}`, JSON.stringify(editedProduct))
      .then((objFromDb) =>{
        resolve(objFromDb);
      })
      .catch((error)=>{
        reject(error);
      });
    });
  };

  let deleteProduct = (productId) => {
    return $q((resolve, reject) => {
      $http.delete(`${CashDrawerAPI}products/${productId}`)
      .then((objFromDb) => {
        resolve(objFromDb);
      });
    });
  };

// Ledger
  let postOpenDrawer = (newDrawer) => {
    let postObj = {OpenDrawerBalance: newDrawer , ClosedDrawerBalance: 0};
    return $q( (resolve, reject) => {
      $http.post(`${CashDrawerAPI}ledger`, JSON.stringify(postObj))
        .then((objFromDb) => {
          resolve(objFromDb);
        })
      .catch((error)=>{
        reject(error);
      });
    });
  };

  let postCloseDrawer = (newDrawer) => {
    let postObj = {OpenDrawerBalance: 0 , ClosedDrawerBalance: newDrawer};
    return $q( (resolve, reject) => {
      $http.post(`${CashDrawerAPI}ledger`, JSON.stringify(postObj))
        .then((objFromDb) => {
          resolve(objFromDb);
        })
      .catch((error)=>{
        reject(error);
      });
    });
  };


  return{getProductList, postNewProduct, deleteProduct, getSingleProduct, updateProduct, postOpenDrawer, postCloseDrawer};
});
