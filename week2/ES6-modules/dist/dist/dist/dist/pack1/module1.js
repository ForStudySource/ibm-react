'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

// export let productId = 123;
// export let productName = "Laptop";

//--------------------------------

// let productId = 123;
// let productName = "Laptop";


// export { productId, productName }; 

//----------------------------------    

// let product = {
//     id: 123,
//     name:'Laptop'
// };

// export { product };

//----------------------------------

var MainComponent = function () {
    function MainComponent() {
        _classCallCheck(this, MainComponent);
    }

    _createClass(MainComponent, [{
        key: 'sayName',
        value: function sayName() {
            console.log('im MainComponent');
        }
    }]);

    return MainComponent;
}();

var Comp1 = function Comp1() {
    _classCallCheck(this, Comp1);
};

var Comp2 = function Comp2() {
    _classCallCheck(this, Comp2);
};

exports.default = MainComponent;
exports.Comp1 = Comp1;
exports.Comp2 = Comp2;