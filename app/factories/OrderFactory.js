"use strict";

app.factory("OrderFactory", (CashDrawerAPI, $q, $http) => {
// Order Table Functions
  let postNewOrder = (newOrder) => {
    return $q( (resolve, reject) => {
      $http.post(`${CashDrawerAPI}orders`, JSON.stringify(newOrder))
        .then((objFromDb) => {
          resolve(objFromDb);
        })
      .catch((error)=>{
        reject(error);
      });
    });
  };

  let updateOrder = (orderId, editedOrder) => {
    return $q((resolve, reject) => {
      $http.put(`${CashDrawerAPI}orders/${orderId}`, JSON.stringify(editedOrder))
      .then((objFromDb) =>{
        resolve(objFromDb);
      })
      .catch((error)=>{
        reject(error);
      });
    });
  };

  let deleteOrder = (orderId) => {
    return $q((resolve, reject) => {
      $http.delete(`${CashDrawerAPI}orders/${orderId}`)
      .then((objFromDb) => {
        resolve(objFromDb);
      });
    });
  };

  let getCompletedOrders = () => {
    let orders = [];
    return $q((resolve, reject) => {
      $http.get(`${CashDrawerAPI}orders`)
      .then((orderObject) => {
        resolve(orderObject.data);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  let getSingleOrder = (orderId) => {
    return $q((resolve, reject) => {
      $http.get(`${CashDrawerAPI}orders/${orderId}`)
      .then((orderObject) =>{
        resolve(orderObject.data);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

// LineItem Table Functions
  let postNewLineItem = (newLineItem) => {
    return $q( (resolve, reject) => {
      $http.post(`${CashDrawerAPI}lineitems`, JSON.stringify(newLineItem))
        .then((objFromDb) => {
          resolve(objFromDb);
        })
      .catch((error)=>{
        reject(error);
      });
    });
  };

  let getLineItemsOnOrder = (orderId) => {
    let lineitems = [];
    return $q((resolve, reject) => {
      $http.get(`${CashDrawerAPI}lineitems/${orderId}`)
      .then((lineitemObject) => {
        resolve(lineitemObject.data);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  return{postNewOrder, updateOrder, deleteOrder, getCompletedOrders, getSingleOrder, postNewLineItem, getLineItemsOnOrder};
});
