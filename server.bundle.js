/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var itemPurchaseModelSchema = new Schema({
    name: { type: String, required: true },
    quantity: { type: String, required: true }
});

var itemPurchaseModel = _mongoose2.default.model('itemPurchaseModel', itemPurchaseModelSchema);

exports.default = itemPurchaseModel;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var UserModelSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

var UserModel = _mongoose2.default.model('UserModel', UserModelSchema);

exports.default = UserModel;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signupUser = exports.signupUserSuccess = undefined;

var _axios = __webpack_require__(25);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var signupUserSuccess = exports.signupUserSuccess = function signupUserSuccess(signup) {
    return {
        type: 'SIGNUP_SUCCESS',
        signup: signup
    };
};

var signupUser = exports.signupUser = function signupUser(data) {
    return function (dispatch) {
        return _axios2.default.post('/api/signup', data).then(function (response) {
            console.log(response.data);
            dispatch(signupUserSuccess(response.data));
        }).catch(function (error) {
            console.log(error);
            throw error;
        });
    };
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {};

config.mongoURI = {
  development: 'mongodb://localhost/node-testing',
  test: 'mongodb://localhost/node-test'
};

exports.default = config;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _userModel = __webpack_require__(5);

var _userModel2 = _interopRequireDefault(_userModel);

var _companyModel = __webpack_require__(13);

var _companyModel2 = _interopRequireDefault(_companyModel);

var _itemPurchaseModel = __webpack_require__(4);

var _itemPurchaseModel2 = _interopRequireDefault(_itemPurchaseModel);

var _purchaseModel = __webpack_require__(14);

var _purchaseModel2 = _interopRequireDefault(_purchaseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = _express2.default.Router();

/*
 *             SIGNIN
 *
 */
api.route('/signup').post(function (req, res) {
    if (req.body.password !== req.body.confirm) {
        res.statusCode = 422;
        return res.send('The password that your provided does not match. Please, check the fields again.');
    }

    var user = new _userModel2.default();
    user.email = req.body.email;
    user.password = req.body.password;

    user.save(function (err) {
        if (err) {
            return res.send(err);
        }
        console.log(user);
        res.json({ 'AUTHENTICATED': { user: user.email, id: user._id } });
    });
});

/*
 *             USER
 *
 */
api.route('/users').get(function (req, res) {
    _userModel2.default.find(function (err, users) {
        if (err) {
            return res.send(err);
        }
        res.json(users);
    });
}).post(function (req, res) {
    var user = new _userModel2.default();
    user.email = req.body.email;
    user.password = req.body.password;

    user.save(function (err) {
        if (err) {
            return res.send(err);
        }

        res.json({ 'SUCCESS': user });
    });
});

api.route('/user/:id').get(function (req, res) {
    _userModel2.default.findById(req.params.id, function (err, user) {
        if (err) {
            return res.send(err);
        }

        res.json({ 'SUCCESS': user });
    });
}).put(function (req, res) {
    _userModel2.default.findById(req.params.id, function (e, user) {
        if (e) {
            return res.send(e);
        }
        if (!user) {
            return res.sendStatus(404);
        }

        user.email = req.body.email || user.email;
        user.password = req.body.password || user.password;

        user.save(function (err, updatedUser) {
            if (err) {
                return res.sendStatus(500, err);
            }
            res.json({ 'UPDATED': updatedUser });
        });
    });
}).delete(function (req, res) {
    _userModel2.default.findByIdAndRemove(req.params.id, function (err, user) {
        res.send({ 'DELETED': user });
    });
});

/*
 *             COMPANY
 *
 */
api.route('/companies').get(function (req, res) {
    _companyModel2.default.find(function (err, companies) {
        if (err) {
            return res.send(err);
        }
        res.json(companies);
    });
}).post(function (req, res) {
    var company = new _companyModel2.default();
    company.cnpj = req.body.cnpj;
    company.name = req.body.name;

    company.save(function (err) {
        if (err) {
            return res.send(err);
        }

        res.json({ 'SUCCESS': company });
    });
});

api.route('/company/:cnpj').get(function (req, res) {
    _companyModel2.default.findOne({ cnpj: req.params.cnpj }, function (err, company) {
        if (err) {
            return res.send(err);
        }

        res.json({ 'SUCCESS': company });
    });
});

/*
 *             ITEM PURCHASE
 *
 */
api.route('/items').get(function (req, res) {
    _itemPurchaseModel2.default.find(function (err, items) {
        if (err) {
            return res.send(err);
        }
        res.json(items);
    });
}).post(function (req, res) {
    var item = new _itemPurchaseModel2.default();
    item.quantity = req.body.quantity;
    item.name = req.body.name;

    item.save(function (err) {
        if (err) {
            return res.send(err);
        }

        res.json({ 'SUCCESS': item });
    });
});

api.route('/item/:id').get(function (req, res) {
    _itemPurchaseModel2.default.findById(req.params.id, function (err, item) {
        if (err) {
            return res.send(err);
        }

        res.json({ 'SUCCESS': item });
    });
});

/*
 *             PURCHASE
 *
 */
api.route('/purchases').get(function (req, res) {
    _purchaseModel2.default.find(function (err, purchase) {
        if (err) {
            return res.send(err);
        }
        res.json(purchase);
    });
}).post(function (req, res) {
    var purchase = new _purchaseModel2.default();
    purchase.items = req.body.items;
    purchase.userId = req.body.userId;

    purchase.save(function (err) {
        if (err) {
            return res.send(err);
        }

        res.json({ 'SUCCESS': purchase });
    });
});

api.route('/purchase/:id').get(function (req, res) {
    _purchaseModel2.default.findById(req.params.id, function (err, purchase) {
        if (err) {
            return res.send(err);
        }

        res.json({ 'SUCCESS': purchase });
    });
}).delete(function (req, res) {
    _purchaseModel2.default.findByIdAndRemove(req.params.id, function (err, purchase) {
        res.send({ 'DELETED': purchase });
    });
});

exports.default = api;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(23);

var _server2 = _interopRequireDefault(_server);

var _reactRouter = __webpack_require__(2);

var _routes = __webpack_require__(22);

var _routes2 = _interopRequireDefault(_routes);

var _index = __webpack_require__(19);

var _index2 = _interopRequireDefault(_index);

var _redux = __webpack_require__(8);

var _reactRedux = __webpack_require__(7);

var _signupActions = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
	/*
 Here we are first matching if the current url exists in the react router routes
  */
	(0, _reactRouter.match)({ routes: _routes2.default, location: req.originalUrl }, function (error, redirectLocation, renderProps) {
		if (error) {
			res.status(500).send(error.message);
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if (renderProps) {

			/*
          http://redux.js.org/docs/recipes/ServerRendering.html
    */
			var store = (0, _redux.createStore)(_index2.default);

			var html = _server2.default.renderToString(_react2.default.createElement(
				_reactRedux.Provider,
				{ store: store },
				_react2.default.createElement(_reactRouter.RouterContext, renderProps)
			));

			/*
   We can dispatch actions from server side as well. This can be very useful if you want
   to inject some initial data into the app. For example, if you have some articles that
   you have fetched from database and you want to load immediately after the user has loaded
   the webpage, you can do so in here.
   	Here we are inject an list item into our app. Normally once the user has loaded the webpage
   we would make a request to the server and get the latest item list. But in the server we have
   instant connection to a database (for example, if you have a mongoDB or MySQL database installed
   in the server which contains all you items). So you can quickly fetch and inject it into the webpage.
   	This will help SEO as well. If you load the webpage and make a request to the server to get all the
   latest items/articles, by the time Google Search Engine may not see all the updated items/articles.
   	But if you inject the latest items/articles before it reaches the user, the Search Engine will see the
   item/article immediately.
    */
			// store.dispatch({
			//     type: SIGNUP_SUCCESS,
			//     payload: {
			//         login: 'user',
			//         password: 'pass',
			//         confirm: 'pass'
			//     }
			// });

			var finalState = store.getState();

			res.status(200).send(renderFullPage(html, finalState));
		} else {
			res.status(404).send('Not found');
		}
	});
});

/*
In this function, you can render you html part of the webpage. You can add some meta tags or Opern Graph tags
using JS variables.
 */
function renderFullPage(html, initialState) {
	return '\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n    \t<!-- Required meta tags always come first -->\n    \t<meta charset="utf-8">\n    \t<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n    \t<meta http-equiv="x-ua-compatible" content="ie=edge">\n    \t<title>React Router Redux Express</title>\n    </head>\n    <body>\n\n    \t<div id="app"><div>' + html + '</div></div>\n        <script>\n            window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + '\n          </script>\n    \t<script src="../bin/app.bundle.js"></script>\n    \t<!-- jQuery first, then Bootstrap JS. -->\n    \t<script src="https://www.atlasestateagents.co.uk/javascript/tether.min.js"></script>\n        <script src="http://localhost:35729/livereload.js"></script>\n    </body>\n    </html>\n    ';
}

exports.default = router;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _purchaseModel = __webpack_require__(14);

var _purchaseModel2 = _interopRequireDefault(_purchaseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var companyModelSchema = new Schema({
    cnpj: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    purchases: [{ type: Schema.Types.ObjectId, ref: _purchaseModel2.default }]
});

var companyModel = _mongoose2.default.model('companyModel', companyModelSchema);

exports.default = companyModel;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _itemPurchaseModel = __webpack_require__(4);

var _itemPurchaseModel2 = _interopRequireDefault(_itemPurchaseModel);

var _userModel = __webpack_require__(5);

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var purchaseModelSchema = new Schema({
    items: [{ type: Schema.Types.ObjectId, ref: _itemPurchaseModel2.default }],
    userId: { type: String, ref: _userModel2.default }
});

var purchaseModel = _mongoose2.default.model('purchaseModel', purchaseModelSchema);

exports.default = purchaseModel;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _index = __webpack_require__(11);

var _index2 = _interopRequireDefault(_index);

var _api = __webpack_require__(10);

var _api2 = _interopRequireDefault(_api);

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = __webpack_require__(12);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = __webpack_require__(9);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

// //db options
// let options = {
//                 server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
//                 replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
//               };

// native promise
_mongoose2.default.Promise = global.Promise;
// db connection
_mongoose2.default.connect(_config2.default.mongoURI[app.settings.env], function (err, res) {
    if (err) {
        console.log('Error connecting to the database. ' + err);
    } else {
        console.log('Connected to Database: ' + _config2.default.mongoURI[app.settings.env]);
    }
});

var db = _mongoose2.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use('/bin', _express2.default.static('./bin'));
app.use('/stylesheets', _express2.default.static('./public/stylesheets'));

app.use('/', _index2.default);
app.use('/view/*', _index2.default);

app.use('/api', _api2.default);
app.use('/api/*', _api2.default);

app.listen(3000, function () {
    console.log('Hello World listening on port 3000!');
});

exports.default = app;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            'BBQ App'
        ),
        props.children
    );
};

exports.default = App;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_React$Component) {
    _inherits(LoginPage, _React$Component);

    function LoginPage(props) {
        _classCallCheck(this, LoginPage);

        return _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));
    }

    _createClass(LoginPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'Login'
                ),
                _react2.default.createElement(
                    'form',
                    null,
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'login' },
                        'Login'
                    ),
                    _react2.default.createElement('input', { type: 'text', name: 'login' }),
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'password' },
                        'Password'
                    ),
                    _react2.default.createElement('input', { type: 'password', name: 'password' }),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/signup' },
                        'Nova Conta'
                    ),
                    _react2.default.createElement(
                        'button',
                        { type: 'submit' },
                        'Login'
                    )
                )
            );
        }
    }]);

    return LoginPage;
}(_react2.default.Component);

exports.default = LoginPage;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _signupActions = __webpack_require__(6);

var signupActions = _interopRequireWildcard(_signupActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignupPage = function (_React$Component) {
    _inherits(SignupPage, _React$Component);

    function SignupPage(props) {
        _classCallCheck(this, SignupPage);

        return _possibleConstructorReturn(this, (SignupPage.__proto__ || Object.getPrototypeOf(SignupPage)).call(this, props));
    }

    _createClass(SignupPage, [{
        key: 'handleSignup',
        value: function handleSignup(input) {
            this.props.signupUser(input);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var loginInput = void 0,
                passwordInput = void 0,
                confirmInput = null;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'Sign Up'
                ),
                _react2.default.createElement(
                    'form',
                    { onSubmit: function onSubmit(e) {
                            e.preventDefault();

                            var input = {
                                email: loginInput.value,
                                password: passwordInput.value,
                                confirm: confirmInput.value
                            };

                            _this2.handleSignup(input);

                            e.target.reset();
                        } },
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'login' },
                        'Login'
                    ),
                    _react2.default.createElement('input', {
                        type: 'text',
                        ref: function ref(node) {
                            return loginInput = node;
                        },
                        name: 'login' }),
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'password' },
                        'Password'
                    ),
                    _react2.default.createElement('input', {
                        type: 'password',
                        ref: function ref(node) {
                            return passwordInput = node;
                        },
                        name: 'password' }),
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'confirm-password' },
                        'Confirm password'
                    ),
                    _react2.default.createElement('input', {
                        type: 'password',
                        ref: function ref(node) {
                            return confirmInput = node;
                        },
                        name: 'confirm-password' }),
                    _react2.default.createElement(
                        'button',
                        { type: 'submit' },
                        'Sign Up'
                    )
                )
            );
        }
    }]);

    return SignupPage;
}(_react2.default.Component);

var mapStateRoProps = function mapStateRoProps(state, ownProps) {
    return state;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        signupUser: function signupUser(signupInput) {
            return dispatch(signupActions.signupUser(signupInput));
        }
    };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SignupPage);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _signupReducers = __webpack_require__(20);

var _signupReducers2 = _interopRequireDefault(_signupReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    signup: _signupReducers2.default
});
// rootReducers

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'SIGNUP_SUCCESS':
            return action.signup;
        default:
            return state;
    }
};

/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _App = __webpack_require__(16);

var _App2 = _interopRequireDefault(_App);

var _LoginPage = __webpack_require__(17);

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _SignupPage = __webpack_require__(18);

var _SignupPage2 = _interopRequireDefault(_SignupPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(
        _reactRouter.Route,
        { path: '/', component: _App2.default },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: _LoginPage2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/signup', component: _SignupPage2.default })
    )
);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })
/******/ ]);