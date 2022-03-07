// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl:"http://localhost:8100/api/",
  regExt:"register",
  token:'auth_token',
  token_header:"jwt_token_header",
  user:"users",
  product:"products",
  login:'loggedIn',
  userName:'user_name',
  userId:'user_id',
  productUrl:"http://localhost:8100/api/products",
  //productUrl:"https://fakestoreapi.com/products"
  paymentsHeader:{
    "content-type":"application/json",
    "x-client-id":"1393111135bcb5f719e8637ae3113931",
    "x-client-secret":"aadfd83b55578a81db4eabe475970eefe8fec00f",
    "x-api-version":"2022-01-01",
    "access-control-allow-origin":'*',
    "accept-encoding":"gzip, deflate, br",
    "access-control-request-method":"POST"
  },
  paymentReturnUrl:"http://localhost:4200/cart?order_id={order_id}&order_token={order_token}",
  paymentUrl:"https://sandbox.cashfree.com/pg/orders"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
