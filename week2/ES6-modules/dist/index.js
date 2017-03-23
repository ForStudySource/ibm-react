'use strict';

var _module = require('./pack1/module1');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var main = new _module2.default();

// import { productId,productName } from './pack1/module1';

// console.log(productId);
// console.log(productName);

//------------------------------------------------

// import * as productDet from './pack1/module1';

// console.log(productDet.productId);
// console.log(productDet.productName);

//------------------------------------------------

// import { productId as id, productName as name } from './pack1/module1';

// console.log(id);
// console.log(name);

// id = 0;  // cant mutate reference  of imported members


//----------------------------------------------------------

// import { product } from './pack1/module1';

// // product = null; // cant mutate rerence

// product.name = "Mac pro"; // can mutate props

// console.log(product.name);

//----------------------------------------------------------

main.sayName();

var comp1 = new _module.CompOne();

//----------------------------------------------------------