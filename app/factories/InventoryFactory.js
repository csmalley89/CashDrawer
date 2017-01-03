"use strict";

app.factory("InventoryFactory", ($q, $http, CashDrawerAPI) => {

  let getProductList = (user) => {
    let products = [];
    return $q((resolve, reject) => {
      $http.get(`${CashDrawerAPI}products.json`)
      .success((productObject) => {
        if (productObject !== null) {
        Object.keys(productObject).forEach((key) => {
          productObject[key].id = key;
          products.push(productObject[key]);
        });
        resolve(products);
      } else {
        resolve(products);
      }
      })
      .error((error) => {
        reject(error);
      });
    });
  };

  let getSingleProduct = (productId) => {
    return $q((resolve, reject) => {
      $http.get(`${CashDrawerAPI}products/${productId}.json`)
      .success((productObject) =>{
        resolve(productObject);
      })
      .error((error) => {
        reject(error);
      });
    });
  };

  let postNewProduct = (newProduct) => {
    return $q( (resolve, reject) => {
      $http.post(`${CashDrawerAPI}products.json`, JSON.stringify(newProduct))
        .success((objFromDb) => {
          resolve(objFromDb);
        })
      .error((error)=>{
        reject(error);
      });
    });
  };

  let updateProduct = (productId, editedProduct) => {
    return $q((resolve, reject) => {
      $http.patch(`${CashDrawerAPI}products/${productId}.json`, JSON.stringify(editedProduct))
      .success((objFromDb) =>{
        resolve(objFromDb);
      })
      .error((error)=>{
        reject(error);
      });
    });
  };

  let deleteProduct = (productId) => {
    return $q((resolve, reject) => {
      $http.delete(`${CashDrawerAPI}products/${productId}.json`)
      .success((objFromDb) => {
        resolve(objFromDb);
      });
    });
  };


  return{getProductList, postNewProduct, deleteProduct, getSingleProduct, updateProduct};
})
