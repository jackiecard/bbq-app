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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuComponent = function MenuComponent(props) {

    return _react2.default.createElement(
        'div',
        { className: 'menu-wrapper' },
        _react2.default.createElement(
            'ul',
            { className: 'menu' },
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/dashboard' },
                    'Dashboard'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/register' },
                    'Register new company'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/purchase' },
                    'New purchase'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/myaccount' },
                    'My account'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/' },
                    'Logout'
                )
            )
        )
    );
};

exports.default = MenuComponent;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var signupErrors = exports.signupErrors = function signupErrors(errors) {
    return {
        type: 'SIGNUP_ERRORS',
        errors: errors
    };
};
var loginErrors = exports.loginErrors = function loginErrors(errors) {
    return {
        type: 'LOGIN_ERRORS',
        errors: errors
    };
};

var companyErrors = exports.companyErrors = function companyErrors(errors) {
    return {
        type: 'COMPANY_ERRORS',
        errors: errors
    };
};

var sendCompanyErrors = exports.sendCompanyErrors = function sendCompanyErrors(errors) {
    return function (dispatch) {
        dispatch(loginErrors(errors));
    };
};

var sendLoginErrors = exports.sendLoginErrors = function sendLoginErrors(errors) {
    return function (dispatch) {
        dispatch(loginErrors(errors));
    };
};

var sendSignupErrors = exports.sendSignupErrors = function sendSignupErrors(errors) {
    return function (dispatch) {
        dispatch(signupErrors(errors));
    };
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(3);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(3);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _itemPurchaseModel = __webpack_require__(8);

var _itemPurchaseModel2 = _interopRequireDefault(_itemPurchaseModel);

var _userModel = __webpack_require__(10);

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(3);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.changeAccountSettings = exports.login = exports.accountChanged = exports.loginSuccess = undefined;

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

var _errorsActions = __webpack_require__(6);

var errorActions = _interopRequireWildcard(_errorsActions);

var _reactRouter = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loginSuccess = exports.loginSuccess = function loginSuccess(login) {
    return {
        type: 'LOGIN_SUCCESS',
        login: login
    };
};
var accountChanged = exports.accountChanged = function accountChanged(login) {
    return {
        type: 'ACCOUNT_CHANGED_SUCCESS',
        login: login
    };
};

var login = exports.login = function login(data) {
    return function (dispatch) {
        return _axios2.default.post('/api/login', data).then(function (response) {
            dispatch(loginSuccess(response.data));
            _reactRouter.browserHistory.push('/dashboard');
        }).catch(function (error) {
            dispatch(errorActions.sendLoginErrors(error.response.data));
            throw error;
        });
    };
};

var changeAccountSettings = exports.changeAccountSettings = function changeAccountSettings(data) {
    return function (dispatch) {
        return _axios2.default.put('/api/login/' + data.id, data.params).then(function (response) {
            dispatch(accountChanged(response.data));
            _reactRouter.browserHistory.push('/dashboard');
        }).catch(function (error) {
            dispatch(errorActions.sendLoginErrors(error.response.data));
            throw error;
        });
    };
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signupUser = exports.signupUserSuccess = undefined;

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

var _errorsActions = __webpack_require__(6);

var errorActions = _interopRequireWildcard(_errorsActions);

var _reactRouter = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
            dispatch(signupUserSuccess(response.data));
            _reactRouter.browserHistory.push('/');
        }).catch(function (error) {
            dispatch(errorActions.sendSignupErrors(error.response.data));
            throw error;
        });
    };
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _userModel = __webpack_require__(10);

var _userModel2 = _interopRequireDefault(_userModel);

var _companyModel = __webpack_require__(18);

var _companyModel2 = _interopRequireDefault(_companyModel);

var _itemPurchaseModel = __webpack_require__(8);

var _itemPurchaseModel2 = _interopRequireDefault(_itemPurchaseModel);

var _purchaseModel = __webpack_require__(9);

var _purchaseModel2 = _interopRequireDefault(_purchaseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = _express2.default.Router();

/*
 *             LOGIN
 *
 */
api.route('/login').post(function (req, res) {
    _userModel2.default.findOne({ email: req.body.email }, function (err, user) {
        if (!user) {
            res.statusCode = 401;
            return res.send('Email or password are not correct');
        }
        if (err) {
            return res.send(err);
        }
        return res.json({ 'AUTHENTICATED': { email: user.email, _id: user._id } });
    });
});

api.route('/login/:id').put(function (req, res) {
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
            res.json({ 'AUTHENTICATED': { email: updatedUser.email, _id: updatedUser._id } });
        });
    });
});

/*
 *             SIGNUP
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
        res.json({ 'SUCCESS': { user: user.email, id: user._id } });
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
        res.json(item);
    });
});

api.route('/item/:id').get(function (req, res) {
    _itemPurchaseModel2.default.findById(req.params.id, function (err, item) {
        if (err) {
            return res.send(err);
        }

        res.json(item);
    });
}).delete(function (req, res) {
    _itemPurchaseModel2.default.findByIdAndRemove(req.params.id, function (err, item) {
        res.send({ item: item });
    });
});

/*
 *             PURCHASE
 *
 */
api.route('/purchased').post(function (req, res) {
    var purchase = new _purchaseModel2.default();

    purchase.userId = req.body.userId;

    req.body.items.map(function (item) {
        var newItem = new _itemPurchaseModel2.default();

        newItem.quantity = item.quantity;
        newItem.name = item.name;

        newItem.save(function (err) {
            if (err) {
                return res.send(err);
            }
            purchase.items.push(newItem);
        });
    });

    purchase.save(function (err) {
        if (err) {
            return res.send(err);
        }

        res.json({ 'SUCCESS': purchase });
    });
});
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(36);

var _server2 = _interopRequireDefault(_server);

var _reactRouter = __webpack_require__(1);

var _routes = __webpack_require__(35);

var _routes2 = _interopRequireDefault(_routes);

var _index = __webpack_require__(31);

var _index2 = _interopRequireDefault(_index);

var _redux = __webpack_require__(13);

var _reactRedux = __webpack_require__(2);

var _signupActions = __webpack_require__(12);

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
/* 17 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(3);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _purchaseModel = __webpack_require__(9);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _index = __webpack_require__(16);

var _index2 = _interopRequireDefault(_index);

var _api = __webpack_require__(15);

var _api2 = _interopRequireDefault(_api);

var _mongoose = __webpack_require__(3);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = __webpack_require__(17);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = __webpack_require__(14);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registerCompany = exports.registerCompanySuccess = undefined;

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

var _errorsActions = __webpack_require__(6);

var errorActions = _interopRequireWildcard(_errorsActions);

var _reactRouter = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registerCompanySuccess = exports.registerCompanySuccess = function registerCompanySuccess(company) {
    return {
        type: 'REGISTER_SUCCESS',
        company: company
    };
};

var registerCompany = exports.registerCompany = function registerCompany(data) {
    return function (dispatch) {
        return _axios2.default.post('/api/companies', data).then(function (response) {
            dispatch(registerCompanySuccess(response.data));
            _reactRouter.browserHistory.push('/dashboard');
        }).catch(function (error) {
            dispatch(errorActions.sendCompanyErrors(error.response.data));
            throw error;
        });
    };
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { className: 'logo' }),
        props.children
    );
};

exports.default = App;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _MenuComponent = __webpack_require__(4);

var _MenuComponent2 = _interopRequireDefault(_MenuComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DashboardPage = function (_React$Component) {
    _inherits(DashboardPage, _React$Component);

    function DashboardPage(props) {
        _classCallCheck(this, DashboardPage);

        return _possibleConstructorReturn(this, (DashboardPage.__proto__ || Object.getPrototypeOf(DashboardPage)).call(this, props));
    }

    _createClass(DashboardPage, [{
        key: 'generateRows',
        value: function generateRows() {
            if (this.props.companyList.length === 0) {
                return _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement('td', null),
                    _react2.default.createElement(
                        'td',
                        null,
                        'nothing to show yet.'
                    ),
                    _react2.default.createElement('td', null)
                );
            }

            var data = this.props.companyList;

            return data.map(function (company) {
                return _react2.default.createElement(
                    'tr',
                    { key: company.SUCCESS.cnpj },
                    _react2.default.createElement(
                        'td',
                        null,
                        company.SUCCESS.cnpj
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        company.SUCCESS.name
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                            'button',
                            null,
                            '0'
                        )
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_MenuComponent2.default, null),
                _react2.default.createElement(
                    'h1',
                    null,
                    'Dashboard'
                ),
                _react2.default.createElement(
                    'table',
                    { className: 'table-dashboard' },
                    _react2.default.createElement(
                        'tbody',
                        null,
                        this.generateRows()
                    )
                )
            );
        }
    }]);

    return DashboardPage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return { companyList: state.company.list };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DashboardPage);

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _MenuComponent = __webpack_require__(4);

var _MenuComponent2 = _interopRequireDefault(_MenuComponent);

var _loginActions = __webpack_require__(11);

var loginActions = _interopRequireWildcard(_loginActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyAccountPage = function (_React$Component) {
    _inherits(MyAccountPage, _React$Component);

    function MyAccountPage(props) {
        _classCallCheck(this, MyAccountPage);

        return _possibleConstructorReturn(this, (MyAccountPage.__proto__ || Object.getPrototypeOf(MyAccountPage)).call(this, props));
    }

    _createClass(MyAccountPage, [{
        key: 'handleSettings',
        value: function handleSettings(input) {
            var userInput = {
                id: this.props.userId,
                params: input
            };
            this.props.changeAccountSettings(userInput);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var emailInput = void 0,
                passwordInput = null;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_MenuComponent2.default, null),
                _react2.default.createElement(
                    'h1',
                    null,
                    'My Account'
                ),
                _react2.default.createElement(
                    'form',
                    { onSubmit: function onSubmit(e) {
                            e.preventDefault();

                            var input = {
                                email: emailInput.value,
                                password: passwordInput.value
                            };

                            _this2.handleSettings(input);

                            e.target.reset();
                        } },
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'email' },
                        'Email'
                    ),
                    _react2.default.createElement('input', { type: 'text',
                        ref: function ref(node) {
                            return emailInput = node;
                        },
                        name: 'email' }),
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
                        'button',
                        { type: 'submit' },
                        'Submit'
                    )
                )
            );
        }
    }]);

    return MyAccountPage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return { userId: state.login.AUTHENTICATED._id };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        changeAccountSettings: function changeAccountSettings(userInput) {
            return dispatch(loginActions.changeAccountSettings(userInput));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MyAccountPage);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _MenuComponent = __webpack_require__(4);

var _MenuComponent2 = _interopRequireDefault(_MenuComponent);

var _nodeUuid = __webpack_require__(39);

var _nodeUuid2 = _interopRequireDefault(_nodeUuid);

var _companyActions = __webpack_require__(20);

var companyActions = _interopRequireWildcard(_companyActions);

var _cartActions = __webpack_require__(42);

var cartActions = _interopRequireWildcard(_cartActions);

var _purchaseActions = __webpack_require__(46);

var purchaseActions = _interopRequireWildcard(_purchaseActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewPurchasePage = function (_React$Component) {
    _inherits(NewPurchasePage, _React$Component);

    function NewPurchasePage(props) {
        _classCallCheck(this, NewPurchasePage);

        return _possibleConstructorReturn(this, (NewPurchasePage.__proto__ || Object.getPrototypeOf(NewPurchasePage)).call(this, props));
    }

    _createClass(NewPurchasePage, [{
        key: 'generateCompanyOptions',
        value: function generateCompanyOptions() {
            if (!this.props.companies.length) {
                return;
            }
            var data = this.props.companies;

            return data.map(function (company) {
                return _react2.default.createElement(
                    'option',
                    { key: company.SUCCESS.cnpj, value: company.SUCCESS.cnpj },
                    company.SUCCESS.name
                );
            });
        }
    }, {
        key: 'generateProductsOptions',
        value: function generateProductsOptions(products) {
            if (!products) {
                return;
            }
            return products.map(function (product) {
                return _react2.default.createElement(
                    'option',
                    { key: product, value: product },
                    product
                );
            });
        }
    }, {
        key: 'generateRows',
        value: function generateRows() {
            var _this2 = this;

            if (!this.props.cart.itemsList[0]) {
                return _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement('td', null),
                    _react2.default.createElement(
                        'td',
                        null,
                        'nothing to show yet.'
                    ),
                    _react2.default.createElement('td', null)
                );
            }

            var data = this.props.cart.itemsList;

            return data.map(function (item) {
                var itemKey = _nodeUuid2.default.v4();
                return _react2.default.createElement(
                    'tr',
                    { key: itemKey },
                    _react2.default.createElement(
                        'td',
                        null,
                        item.name
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        item.quantity
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                            'button',
                            { onClick: function onClick(e) {
                                    e.preventDefault();
                                    _this2.handleRemoveItem(item.name, item.quantity);
                                } },
                            'Remove'
                        )
                    )
                );
            });
        }
    }, {
        key: 'handleAddPurchandeToCompany',
        value: function handleAddPurchandeToCompany(companyId) {
            this.props.actions.updateCartCompany(companyId);
            var purchase = {
                userId: this.props.userId,
                companyId: companyId,
                items: this.props.cart.itemsList
            };
            this.props.actions.addPurchase(purchase);
            console.log("------ purchase", purchase);
        }
    }, {
        key: 'handleAddItem',
        value: function handleAddItem(name, quantity) {
            var item = { name: name, quantity: quantity };
            this.props.actions.addItemToCart(item);
        }
    }, {
        key: 'handleRemoveItem',
        value: function handleRemoveItem(name, quantity) {
            var item = { name: name, quantity: quantity };
            this.props.actions.removeItemToCart(item);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var companyInput = null;
            var products = ['Bread', 'Beer', 'Meat', 'Chocolate', 'Tomatoes', 'Sausage'];

            var nameInput = null;
            var quantityInput = 1;
            var partial = void 0;

            if (!this.props.companies.length) {
                partial = _react2.default.createElement(
                    'div',
                    null,
                    'Better register a company first ;)'
                );
            } else {
                partial = _react2.default.createElement(
                    'form',
                    { onSubmit: function onSubmit(e) {
                            e.preventDefault();
                            console.log(companyInput.value);

                            _this3.handleAddPurchandeToCompany(companyInput.value);

                            e.target.reset();
                        } },
                    _react2.default.createElement(
                        'select',
                        { ref: function ref(node) {
                                return companyInput = node;
                            } },
                        this.generateCompanyOptions()
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'add-item' },
                        _react2.default.createElement(
                            'select',
                            { ref: function ref(node) {
                                    return nameInput = node;
                                } },
                            this.generateProductsOptions(products)
                        ),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'email' },
                            'Qt:'
                        ),
                        _react2.default.createElement('input', { type: 'number',
                            min: '1',
                            defaultValue: '1',
                            ref: function ref(node) {
                                return quantityInput = node;
                            },
                            name: 'quantity' }),
                        _react2.default.createElement(
                            'button',
                            { onClick: function onClick(e) {
                                    e.preventDefault();
                                    _this3.handleAddItem(nameInput.value, quantityInput.value);
                                } },
                            'Add'
                        )
                    ),
                    _react2.default.createElement(
                        'h4',
                        null,
                        'List of Items'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'table',
                            { className: 'items-table' },
                            _react2.default.createElement(
                                'tbody',
                                null,
                                this.generateRows()
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'button',
                        { type: 'submit' },
                        'Purchase'
                    )
                );
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_MenuComponent2.default, null),
                _react2.default.createElement(
                    'h1',
                    null,
                    'New Purchase'
                ),
                partial
            );
        }
    }]);

    return NewPurchasePage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        companies: state.company.list,
        cart: state.cart,
        userId: state.login.AUTHENTICATED._id
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        actions: {
            addItemToCart: function addItemToCart(item) {
                return dispatch(cartActions.addItemToCart(item));
            },
            removeItemToCart: function removeItemToCart(item) {
                return dispatch(cartActions.removeItemFromCart(item));
            },
            updateCartCompany: function updateCartCompany(companyId) {
                return dispatch(cartActions.updateCartCompany(companyId));
            },
            addPurchase: function addPurchase(purchase) {
                return dispatch(purchaseActions.addPurchase(purchase));
            }
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewPurchasePage);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _MenuComponent = __webpack_require__(4);

var _MenuComponent2 = _interopRequireDefault(_MenuComponent);

var _companyActions = __webpack_require__(20);

var companyActions = _interopRequireWildcard(_companyActions);

var _reactMaskedinput = __webpack_require__(44);

var _reactMaskedinput2 = _interopRequireDefault(_reactMaskedinput);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegisterPage = function (_React$Component) {
    _inherits(RegisterPage, _React$Component);

    function RegisterPage(props) {
        _classCallCheck(this, RegisterPage);

        return _possibleConstructorReturn(this, (RegisterPage.__proto__ || Object.getPrototypeOf(RegisterPage)).call(this, props));
    }

    _createClass(RegisterPage, [{
        key: 'handleRegister',
        value: function handleRegister(input) {
            this.props.registerCompany(input);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var cnpjInput = void 0,
                nameInput = void 0,
                masker = null;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_MenuComponent2.default, null),
                _react2.default.createElement(
                    'h1',
                    null,
                    'Register New Company'
                ),
                _react2.default.createElement(
                    'form',
                    { onSubmit: function onSubmit(e) {
                            e.preventDefault();

                            var input = {
                                cnpj: _this2.refs.cnpj.mask.getRawValue(),
                                name: nameInput.value
                            };

                            _this2.handleRegister(input);

                            e.target.reset();
                        } },
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'cnpj' },
                        'CNPJ'
                    ),
                    _react2.default.createElement(_reactMaskedinput2.default, {
                        className: 'masked-input',
                        ref: 'cnpj',
                        mask: '11.111.111/1111-11',
                        name: 'cnpj' }),
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'name' },
                        'Name'
                    ),
                    _react2.default.createElement('input', {
                        type: 'text',
                        ref: function ref(node) {
                            return nameInput = node;
                        },
                        name: 'name' }),
                    _react2.default.createElement(
                        'button',
                        { type: 'submit' },
                        'Register'
                    )
                )
            );
        }
    }]);

    return RegisterPage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return state;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        registerCompany: function registerCompany(companyInput) {
            return dispatch(companyActions.registerCompany(companyInput));
        }
    };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(RegisterPage);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouter = __webpack_require__(1);

var _loginActions = __webpack_require__(11);

var loginActions = _interopRequireWildcard(_loginActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
        key: 'handleLogin',
        value: function handleLogin(input) {
            this.props.login(input);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var loginInput = void 0,
                passwordInput = null;
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
                    { className: 'login-form', onSubmit: function onSubmit(e) {
                            e.preventDefault();

                            var input = {
                                email: loginInput.value,
                                password: passwordInput.value
                            };

                            _this2.handleLogin(input);

                            e.target.reset();
                        } },
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'login' },
                        'Login'
                    ),
                    _react2.default.createElement('input', { type: 'text',
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
                        'div',
                        { className: 'login-form__action' },
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/signup', className: 'button' },
                            'Nova Conta'
                        ),
                        _react2.default.createElement(
                            'button',
                            { type: 'submit' },
                            'Login'
                        )
                    )
                )
            );
        }
    }]);

    return LoginPage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return state;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        login: function login(loginInput) {
            return dispatch(loginActions.login(loginInput));
        }
    };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(LoginPage);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _signupActions = __webpack_require__(12);

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
                    { className: 'login-form', onSubmit: function onSubmit(e) {
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
                        'div',
                        { className: 'login-form__action' },
                        _react2.default.createElement(
                            'button',
                            { type: 'submit' },
                            'Sign Up'
                        )
                    )
                )
            );
        }
    }]);

    return SignupPage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialUserState = {
    list: []
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialUserState;
    var action = arguments[1];

    switch (action.type) {
        case 'REGISTER_SUCCESS':
            return _extends({}, state, {
                list: state.list.concat(action.company)
            });
        default:
            return state;
    }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'SIGNUP_ERRORS':
            return { type: 'SIGNUP', message: action.errors };
        case 'COMPANY_ERRORS':
            return { type: 'SIGNUP', message: action.errors };
        case 'LOGIN_ERRORS':
            return { type: 'LOGIN', message: action.errors };
        case 'ITEM_ERRORS':
            return { type: 'ITEM', message: action.errors };
        default:
            return state;
    }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(13);

var _signupReducers = __webpack_require__(34);

var _signupReducers2 = _interopRequireDefault(_signupReducers);

var _loginReducers = __webpack_require__(33);

var _loginReducers2 = _interopRequireDefault(_loginReducers);

var _companyReducers = __webpack_require__(29);

var _companyReducers2 = _interopRequireDefault(_companyReducers);

var _itemReducers = __webpack_require__(32);

var _itemReducers2 = _interopRequireDefault(_itemReducers);

var _cartReducers = __webpack_require__(41);

var _cartReducers2 = _interopRequireDefault(_cartReducers);

var _purchaseReducers = __webpack_require__(47);

var _purchaseReducers2 = _interopRequireDefault(_purchaseReducers);

var _errorsReducers = __webpack_require__(30);

var _errorsReducers2 = _interopRequireDefault(_errorsReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    signup: _signupReducers2.default,
    errors: _errorsReducers2.default,
    login: _loginReducers2.default,
    company: _companyReducers2.default,
    item: _itemReducers2.default,
    cart: _cartReducers2.default,
    purchase: _purchaseReducers2.default
});
// rootReducers

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialUserState = {
    list: []
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialUserState;
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_ITEM':
            return _extends({}, state, { list: state.list.concat(action.item) });
        case 'REMOVE_ITEM':
            return _extends({}, state, { list: state.list.concat(action.item) });
        default:
            return state;
    }
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return action.login;
        case 'ACCOUNT_CHANGED_SUCCESS':
            return action.login;
        default:
            return state;
    }
};

/***/ }),
/* 34 */
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

var _App = __webpack_require__(21);

var _App2 = _interopRequireDefault(_App);

var _LoginPage = __webpack_require__(27);

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _SignupPage = __webpack_require__(28);

var _SignupPage2 = _interopRequireDefault(_SignupPage);

var _DashboardPage = __webpack_require__(22);

var _DashboardPage2 = _interopRequireDefault(_DashboardPage);

var _RegisterCompanyPage = __webpack_require__(26);

var _RegisterCompanyPage2 = _interopRequireDefault(_RegisterCompanyPage);

var _MyAccountPage = __webpack_require__(24);

var _MyAccountPage2 = _interopRequireDefault(_MyAccountPage);

var _NewPurchasePage = __webpack_require__(25);

var _NewPurchasePage2 = _interopRequireDefault(_NewPurchasePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(
        _reactRouter.Route,
        { path: '/', component: _App2.default },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: _LoginPage2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/signup', component: _SignupPage2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/dashboard', component: _DashboardPage2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/register', component: _RegisterCompanyPage2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/myaccount', component: _MyAccountPage2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/purchase', component: _NewPurchasePage2.default })
    )
);

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;//     uuid.js
//
//     Copyright (c) 2010-2012 Robert Kieffer
//     MIT License - http://opensource.org/licenses/mit-license.php

/*global window, require, define */
(function(_window) {
  'use strict';

  // Unique ID creation requires a high quality random # generator.  We feature
  // detect to determine the best RNG source, normalizing to a function that
  // returns 128-bits of randomness, since that's what's usually required
  var _rng, _mathRNG, _nodeRNG, _whatwgRNG, _previousRoot;

  function setupBrowser() {
    // Allow for MSIE11 msCrypto
    var _crypto = _window.crypto || _window.msCrypto;

    if (!_rng && _crypto && _crypto.getRandomValues) {
      // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
      //
      // Moderately fast, high quality
      try {
        var _rnds8 = new Uint8Array(16);
        _whatwgRNG = _rng = function whatwgRNG() {
          _crypto.getRandomValues(_rnds8);
          return _rnds8;
        };
        _rng();
      } catch(e) {}
    }

    if (!_rng) {
      // Math.random()-based (RNG)
      //
      // If all else fails, use Math.random().  It's fast, but is of unspecified
      // quality.
      var  _rnds = new Array(16);
      _mathRNG = _rng = function() {
        for (var i = 0, r; i < 16; i++) {
          if ((i & 0x03) === 0) { r = Math.random() * 0x100000000; }
          _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
        }

        return _rnds;
      };
      if ('undefined' !== typeof console && console.warn) {
        console.warn("[SECURITY] node-uuid: crypto not usable, falling back to insecure Math.random()");
      }
    }
  }

  function setupNode() {
    // Node.js crypto-based RNG - http://nodejs.org/docs/v0.6.2/api/crypto.html
    //
    // Moderately fast, high quality
    if (true) {
      try {
        var _rb = __webpack_require__(40).randomBytes;
        _nodeRNG = _rng = _rb && function() {return _rb(16);};
        _rng();
      } catch(e) {}
    }
  }

  if (_window) {
    setupBrowser();
  } else {
    setupNode();
  }

  // Buffer class to use
  var BufferClass = ('function' === typeof Buffer) ? Buffer : Array;

  // Maps for number <-> hex string conversion
  var _byteToHex = [];
  var _hexToByte = {};
  for (var i = 0; i < 256; i++) {
    _byteToHex[i] = (i + 0x100).toString(16).substr(1);
    _hexToByte[_byteToHex[i]] = i;
  }

  // **`parse()` - Parse a UUID into it's component bytes**
  function parse(s, buf, offset) {
    var i = (buf && offset) || 0, ii = 0;

    buf = buf || [];
    s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
      if (ii < 16) { // Don't overflow!
        buf[i + ii++] = _hexToByte[oct];
      }
    });

    // Zero out remaining bytes if string was short
    while (ii < 16) {
      buf[i + ii++] = 0;
    }

    return buf;
  }

  // **`unparse()` - Convert UUID byte array (ala parse()) into a string**
  function unparse(buf, offset) {
    var i = offset || 0, bth = _byteToHex;
    return  bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]];
  }

  // **`v1()` - Generate time-based UUID**
  //
  // Inspired by https://github.com/LiosK/UUID.js
  // and http://docs.python.org/library/uuid.html

  // random #'s we need to init node and clockseq
  var _seedBytes = _rng();

  // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
  var _nodeId = [
    _seedBytes[0] | 0x01,
    _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
  ];

  // Per 4.2.2, randomize (14 bit) clockseq
  var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

  // Previous uuid creation time
  var _lastMSecs = 0, _lastNSecs = 0;

  // See https://github.com/broofa/node-uuid for API details
  function v1(options, buf, offset) {
    var i = buf && offset || 0;
    var b = buf || [];

    options = options || {};

    var clockseq = (options.clockseq != null) ? options.clockseq : _clockseq;

    // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    var msecs = (options.msecs != null) ? options.msecs : new Date().getTime();

    // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    var nsecs = (options.nsecs != null) ? options.nsecs : _lastNSecs + 1;

    // Time since last uuid creation (in msecs)
    var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

    // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq == null) {
      clockseq = clockseq + 1 & 0x3fff;
    }

    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs == null) {
      nsecs = 0;
    }

    // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) {
      throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
    }

    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;

    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000;

    // `time_low`
    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff;

    // `time_mid`
    var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff;

    // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff;

    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80;

    // `clock_seq_low`
    b[i++] = clockseq & 0xff;

    // `node`
    var node = options.node || _nodeId;
    for (var n = 0; n < 6; n++) {
      b[i + n] = node[n];
    }

    return buf ? buf : unparse(b);
  }

  // **`v4()` - Generate random UUID**

  // See https://github.com/broofa/node-uuid for API details
  function v4(options, buf, offset) {
    // Deprecated - 'format' argument, as supported in v1.2
    var i = buf && offset || 0;

    if (typeof(options) === 'string') {
      buf = (options === 'binary') ? new BufferClass(16) : null;
      options = null;
    }
    options = options || {};

    var rnds = options.random || (options.rng || _rng)();

    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;

    // Copy bytes to buffer, if provided
    if (buf) {
      for (var ii = 0; ii < 16; ii++) {
        buf[i + ii] = rnds[ii];
      }
    }

    return buf || unparse(rnds);
  }

  // Export public API
  var uuid = v4;
  uuid.v1 = v1;
  uuid.v4 = v4;
  uuid.parse = parse;
  uuid.unparse = unparse;
  uuid.BufferClass = BufferClass;
  uuid._rng = _rng;
  uuid._mathRNG = _mathRNG;
  uuid._nodeRNG = _nodeRNG;
  uuid._whatwgRNG = _whatwgRNG;

  if (('undefined' !== typeof module) && module.exports) {
    // Publish as node.js module
    module.exports = uuid;
  } else if (true) {
    // Publish as AMD module
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {return uuid;}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


  } else {
    // Publish as global (in browsers)
    _previousRoot = _window.uuid;

    // **`noConflict()` - (browser only) to reset global 'uuid' var**
    uuid.noConflict = function() {
      _window.uuid = _previousRoot;
      return uuid;
    };

    _window.uuid = uuid;
  }
})('undefined' !== typeof window ? window : null);


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialUserState = {
    company: '',
    itemsList: []
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialUserState;
    var action = arguments[1];

    switch (action.type) {
        case 'UPDATE_CART_COMPANY':
            return _extends({}, state, { company: action.companyId });
        case 'ADD_ITEM_TO_CART':
            return _extends({}, state, { itemsList: state.itemsList.concat(action.item) });
        case 'REMOVE_ITEM_FROM_CAR':
            return _extends({}, state, { itemsList: state.itemsList.filter(function (item) {
                    if (JSON.stringify(item) === JSON.stringify(action.item)) {
                        return;
                    }
                    return item;
                }) });
        default:
            return state;
    }
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeItemFromCart = exports.addItemToCart = exports.updateCartCompany = exports.removeItemFromCartSuccess = exports.addItemToCartSuccess = exports.updateCartCompanySuccess = undefined;

var _errorsActions = __webpack_require__(6);

var errorActions = _interopRequireWildcard(_errorsActions);

var _reactRouter = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var updateCartCompanySuccess = exports.updateCartCompanySuccess = function updateCartCompanySuccess(companyId) {
    return {
        type: 'UPDATE_CART_COMPANY',
        companyId: companyId
    };
};

var addItemToCartSuccess = exports.addItemToCartSuccess = function addItemToCartSuccess(item) {
    return {
        type: 'ADD_ITEM_TO_CART',
        item: item
    };
};

var removeItemFromCartSuccess = exports.removeItemFromCartSuccess = function removeItemFromCartSuccess(item) {
    return {
        type: 'REMOVE_ITEM_FROM_CAR',
        item: item
    };
};

var updateCartCompany = exports.updateCartCompany = function updateCartCompany(companyId) {
    return function (dispatch) {
        dispatch(updateCartCompanySuccess(companyId));
    };
};

var addItemToCart = exports.addItemToCart = function addItemToCart(item) {
    return function (dispatch) {
        dispatch(addItemToCartSuccess(item));
    };
};

var removeItemFromCart = exports.removeItemFromCart = function removeItemFromCart(item) {
    return function (dispatch) {
        dispatch(removeItemFromCartSuccess(item));
    };
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function extend(dest, src) {
  if (src) {
    var props = Object.keys(src)
    for (var i = 0, l = props.length; i < l ; i++) {
      dest[props[i]] = src[props[i]]
    }
  }
  return dest
}

function copy(obj) {
  return extend({}, obj)
}

/**
 * Merge an object defining format characters into the defaults.
 * Passing null/undefined for en existing format character removes it.
 * Passing a definition for an existing format character overrides it.
 * @param {?Object} formatCharacters.
 */
function mergeFormatCharacters(formatCharacters) {
  var merged = copy(DEFAULT_FORMAT_CHARACTERS)
  if (formatCharacters) {
    var chars = Object.keys(formatCharacters)
    for (var i = 0, l = chars.length; i < l ; i++) {
      var char = chars[i]
      if (formatCharacters[char] == null) {
        delete merged[char]
      }
      else {
        merged[char] = formatCharacters[char]
      }
    }
  }
  return merged
}

var ESCAPE_CHAR = '\\'

var DIGIT_RE = /^\d$/
var LETTER_RE = /^[A-Za-z]$/
var ALPHANNUMERIC_RE = /^[\dA-Za-z]$/

var DEFAULT_PLACEHOLDER_CHAR = '_'
var DEFAULT_FORMAT_CHARACTERS = {
  '*': {
    validate: function(char) { return ALPHANNUMERIC_RE.test(char) }
  },
  '1': {
    validate: function(char) { return DIGIT_RE.test(char) }
  },
  'a': {
    validate: function(char) { return LETTER_RE.test(char) }
  },
  'A': {
    validate: function(char) { return LETTER_RE.test(char) },
    transform: function(char) { return char.toUpperCase() }
  },
  '#': {
    validate: function(char) { return ALPHANNUMERIC_RE.test(char) },
    transform: function(char) { return char.toUpperCase() }
  }
}

/**
 * @param {string} source
 * @patam {?Object} formatCharacters
 */
function Pattern(source, formatCharacters, placeholderChar, isRevealingMask) {
  if (!(this instanceof Pattern)) {
    return new Pattern(source, formatCharacters, placeholderChar)
  }

  /** Placeholder character */
  this.placeholderChar = placeholderChar || DEFAULT_PLACEHOLDER_CHAR
  /** Format character definitions. */
  this.formatCharacters = formatCharacters || DEFAULT_FORMAT_CHARACTERS
  /** Pattern definition string with escape characters. */
  this.source = source
  /** Pattern characters after escape characters have been processed. */
  this.pattern = []
  /** Length of the pattern after escape characters have been processed. */
  this.length = 0
  /** Index of the first editable character. */
  this.firstEditableIndex = null
  /** Index of the last editable character. */
  this.lastEditableIndex = null
  /** Lookup for indices of editable characters in the pattern. */
  this._editableIndices = {}
  /** If true, only the pattern before the last valid value character shows. */
  this.isRevealingMask = isRevealingMask || false

  this._parse()
}

Pattern.prototype._parse = function parse() {
  var sourceChars = this.source.split('')
  var patternIndex = 0
  var pattern = []

  for (var i = 0, l = sourceChars.length; i < l; i++) {
    var char = sourceChars[i]
    if (char === ESCAPE_CHAR) {
      if (i === l - 1) {
        throw new Error('InputMask: pattern ends with a raw ' + ESCAPE_CHAR)
      }
      char = sourceChars[++i]
    }
    else if (char in this.formatCharacters) {
      if (this.firstEditableIndex === null) {
        this.firstEditableIndex = patternIndex
      }
      this.lastEditableIndex = patternIndex
      this._editableIndices[patternIndex] = true
    }

    pattern.push(char)
    patternIndex++
  }

  if (this.firstEditableIndex === null) {
    throw new Error(
      'InputMask: pattern "' + this.source + '" does not contain any editable characters.'
    )
  }

  this.pattern = pattern
  this.length = pattern.length
}

/**
 * @param {Array<string>} value
 * @return {Array<string>}
 */
Pattern.prototype.formatValue = function format(value) {
  var valueBuffer = new Array(this.length)
  var valueIndex = 0

  for (var i = 0, l = this.length; i < l ; i++) {
    if (this.isEditableIndex(i)) {
      if (this.isRevealingMask &&
          value.length <= valueIndex &&
          !this.isValidAtIndex(value[valueIndex], i)) {
        break
      }
      valueBuffer[i] = (value.length > valueIndex && this.isValidAtIndex(value[valueIndex], i)
                        ? this.transform(value[valueIndex], i)
                        : this.placeholderChar)
      valueIndex++
    }
    else {
      valueBuffer[i] = this.pattern[i]
      // Also allow the value to contain static values from the pattern by
      // advancing its index.
      if (value.length > valueIndex && value[valueIndex] === this.pattern[i]) {
        valueIndex++
      }
    }
  }

  return valueBuffer
}

/**
 * @param {number} index
 * @return {boolean}
 */
Pattern.prototype.isEditableIndex = function isEditableIndex(index) {
  return !!this._editableIndices[index]
}

/**
 * @param {string} char
 * @param {number} index
 * @return {boolean}
 */
Pattern.prototype.isValidAtIndex = function isValidAtIndex(char, index) {
  return this.formatCharacters[this.pattern[index]].validate(char)
}

Pattern.prototype.transform = function transform(char, index) {
  var format = this.formatCharacters[this.pattern[index]]
  return typeof format.transform == 'function' ? format.transform(char) : char
}

function InputMask(options) {
  if (!(this instanceof InputMask)) { return new InputMask(options) }
  options = extend({
    formatCharacters: null,
    pattern: null,
    isRevealingMask: false,
    placeholderChar: DEFAULT_PLACEHOLDER_CHAR,
    selection: {start: 0, end: 0},
    value: ''
  }, options)

  if (options.pattern == null) {
    throw new Error('InputMask: you must provide a pattern.')
  }

  if (typeof options.placeholderChar !== 'string' || options.placeholderChar.length > 1) {
    throw new Error('InputMask: placeholderChar should be a single character or an empty string.')
  }

  this.placeholderChar = options.placeholderChar
  this.formatCharacters = mergeFormatCharacters(options.formatCharacters)
  this.setPattern(options.pattern, {
    value: options.value,
    selection: options.selection,
    isRevealingMask: options.isRevealingMask
  })
}

// Editing

/**
 * Applies a single character of input based on the current selection.
 * @param {string} char
 * @return {boolean} true if a change has been made to value or selection as a
 *   result of the input, false otherwise.
 */
InputMask.prototype.input = function input(char) {
  // Ignore additional input if the cursor's at the end of the pattern
  if (this.selection.start === this.selection.end &&
      this.selection.start === this.pattern.length) {
    return false
  }

  var selectionBefore = copy(this.selection)
  var valueBefore = this.getValue()

  var inputIndex = this.selection.start

  // If the cursor or selection is prior to the first editable character, make
  // sure any input given is applied to it.
  if (inputIndex < this.pattern.firstEditableIndex) {
    inputIndex = this.pattern.firstEditableIndex
  }

  // Bail out or add the character to input
  if (this.pattern.isEditableIndex(inputIndex)) {
    if (!this.pattern.isValidAtIndex(char, inputIndex)) {
      return false
    }
    this.value[inputIndex] = this.pattern.transform(char, inputIndex)
  }

  // If multiple characters were selected, blank the remainder out based on the
  // pattern.
  var end = this.selection.end - 1
  while (end > inputIndex) {
    if (this.pattern.isEditableIndex(end)) {
      this.value[end] = this.placeholderChar
    }
    end--
  }

  // Advance the cursor to the next character
  this.selection.start = this.selection.end = inputIndex + 1

  // Skip over any subsequent static characters
  while (this.pattern.length > this.selection.start &&
         !this.pattern.isEditableIndex(this.selection.start)) {
    this.selection.start++
    this.selection.end++
  }

  // History
  if (this._historyIndex != null) {
    // Took more input after undoing, so blow any subsequent history away
    this._history.splice(this._historyIndex, this._history.length - this._historyIndex)
    this._historyIndex = null
  }
  if (this._lastOp !== 'input' ||
      selectionBefore.start !== selectionBefore.end ||
      this._lastSelection !== null && selectionBefore.start !== this._lastSelection.start) {
    this._history.push({value: valueBefore, selection: selectionBefore, lastOp: this._lastOp})
  }
  this._lastOp = 'input'
  this._lastSelection = copy(this.selection)

  return true
}

/**
 * Attempts to delete from the value based on the current cursor position or
 * selection.
 * @return {boolean} true if the value or selection changed as the result of
 *   backspacing, false otherwise.
 */
InputMask.prototype.backspace = function backspace() {
  // If the cursor is at the start there's nothing to do
  if (this.selection.start === 0 && this.selection.end === 0) {
    return false
  }

  var selectionBefore = copy(this.selection)
  var valueBefore = this.getValue()

  // No range selected - work on the character preceding the cursor
  if (this.selection.start === this.selection.end) {
    if (this.pattern.isEditableIndex(this.selection.start - 1)) {
      this.value[this.selection.start - 1] = this.placeholderChar
    }
    this.selection.start--
    this.selection.end--
  }
  // Range selected - delete characters and leave the cursor at the start of the selection
  else {
    var end = this.selection.end - 1
    while (end >= this.selection.start) {
      if (this.pattern.isEditableIndex(end)) {
        this.value[end] = this.placeholderChar
      }
      end--
    }
    this.selection.end = this.selection.start
  }

  // History
  if (this._historyIndex != null) {
    // Took more input after undoing, so blow any subsequent history away
    this._history.splice(this._historyIndex, this._history.length - this._historyIndex)
  }
  if (this._lastOp !== 'backspace' ||
      selectionBefore.start !== selectionBefore.end ||
      this._lastSelection !== null && selectionBefore.start !== this._lastSelection.start) {
    this._history.push({value: valueBefore, selection: selectionBefore, lastOp: this._lastOp})
  }
  this._lastOp = 'backspace'
  this._lastSelection = copy(this.selection)

  return true
}

/**
 * Attempts to paste a string of input at the current cursor position or over
 * the top of the current selection.
 * Invalid content at any position will cause the paste to be rejected, and it
 * may contain static parts of the mask's pattern.
 * @param {string} input
 * @return {boolean} true if the paste was successful, false otherwise.
 */
InputMask.prototype.paste = function paste(input) {
  // This is necessary because we're just calling input() with each character
  // and rolling back if any were invalid, rather than checking up-front.
  var initialState = {
    value: this.value.slice(),
    selection: copy(this.selection),
    _lastOp: this._lastOp,
    _history: this._history.slice(),
    _historyIndex: this._historyIndex,
    _lastSelection: copy(this._lastSelection)
  }

  // If there are static characters at the start of the pattern and the cursor
  // or selection is within them, the static characters must match for a valid
  // paste.
  if (this.selection.start < this.pattern.firstEditableIndex) {
    for (var i = 0, l = this.pattern.firstEditableIndex - this.selection.start; i < l; i++) {
      if (input.charAt(i) !== this.pattern.pattern[i]) {
        return false
      }
    }

    // Continue as if the selection and input started from the editable part of
    // the pattern.
    input = input.substring(this.pattern.firstEditableIndex - this.selection.start)
    this.selection.start = this.pattern.firstEditableIndex
  }

  for (i = 0, l = input.length;
       i < l && this.selection.start <= this.pattern.lastEditableIndex;
       i++) {
    var valid = this.input(input.charAt(i))
    // Allow static parts of the pattern to appear in pasted input - they will
    // already have been stepped over by input(), so verify that the value
    // deemed invalid by input() was the expected static character.
    if (!valid) {
      if (this.selection.start > 0) {
        // XXX This only allows for one static character to be skipped
        var patternIndex = this.selection.start - 1
        if (!this.pattern.isEditableIndex(patternIndex) &&
            input.charAt(i) === this.pattern.pattern[patternIndex]) {
          continue
        }
      }
      extend(this, initialState)
      return false
    }
  }

  return true
}

// History

InputMask.prototype.undo = function undo() {
  // If there is no history, or nothing more on the history stack, we can't undo
  if (this._history.length === 0 || this._historyIndex === 0) {
    return false
  }

  var historyItem
  if (this._historyIndex == null) {
    // Not currently undoing, set up the initial history index
    this._historyIndex = this._history.length - 1
    historyItem = this._history[this._historyIndex]
    // Add a new history entry if anything has changed since the last one, so we
    // can redo back to the initial state we started undoing from.
    var value = this.getValue()
    if (historyItem.value !== value ||
        historyItem.selection.start !== this.selection.start ||
        historyItem.selection.end !== this.selection.end) {
      this._history.push({value: value, selection: copy(this.selection), lastOp: this._lastOp, startUndo: true})
    }
  }
  else {
    historyItem = this._history[--this._historyIndex]
  }

  this.value = historyItem.value.split('')
  this.selection = historyItem.selection
  this._lastOp = historyItem.lastOp
  return true
}

InputMask.prototype.redo = function redo() {
  if (this._history.length === 0 || this._historyIndex == null) {
    return false
  }
  var historyItem = this._history[++this._historyIndex]
  // If this is the last history item, we're done redoing
  if (this._historyIndex === this._history.length - 1) {
    this._historyIndex = null
    // If the last history item was only added to start undoing, remove it
    if (historyItem.startUndo) {
      this._history.pop()
    }
  }
  this.value = historyItem.value.split('')
  this.selection = historyItem.selection
  this._lastOp = historyItem.lastOp
  return true
}

// Getters & setters

InputMask.prototype.setPattern = function setPattern(pattern, options) {
  options = extend({
    selection: {start: 0, end: 0},
    value: ''
  }, options)
  this.pattern = new Pattern(pattern, this.formatCharacters, this.placeholderChar, options.isRevealingMask)
  this.setValue(options.value)
  this.emptyValue = this.pattern.formatValue([]).join('')
  this.selection = options.selection
  this._resetHistory()
}

InputMask.prototype.setSelection = function setSelection(selection) {
  this.selection = copy(selection)
  if (this.selection.start === this.selection.end) {
    if (this.selection.start < this.pattern.firstEditableIndex) {
      this.selection.start = this.selection.end = this.pattern.firstEditableIndex
      return true
    }
    // Set selection to the first editable, non-placeholder character before the selection
    // OR to the beginning of the pattern
    var index = this.selection.start
    while (index >= this.pattern.firstEditableIndex) {
      if (this.pattern.isEditableIndex(index - 1) &&
          this.value[index - 1] !== this.placeholderChar ||
          index === this.pattern.firstEditableIndex) {
        this.selection.start = this.selection.end = index
        break
      }
      index--
    }
    return true
  }
  return false
}

InputMask.prototype.setValue = function setValue(value) {
  if (value == null) {
    value = ''
  }
  this.value = this.pattern.formatValue(value.split(''))
}

InputMask.prototype.getValue = function getValue() {
  return this.value.join('')
}

InputMask.prototype.getRawValue = function getRawValue() {
  var rawValue = []
  for (var i = 0; i < this.value.length; i++) {
    if (this.pattern._editableIndices[i] === true) {
      rawValue.push(this.value[i])
    }
  }
  return rawValue.join('')
}

InputMask.prototype._resetHistory = function _resetHistory() {
  this._history = []
  this._historyIndex = null
  this._lastOp = null
  this._lastSelection = copy(this.selection)
}

InputMask.Pattern = Pattern

module.exports = InputMask


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inputmask_core__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inputmask_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_inputmask_core__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var KEYCODE_Z = 90;
var KEYCODE_Y = 89;

function isUndo(e) {
  return (e.ctrlKey || e.metaKey) && e.keyCode === (e.shiftKey ? KEYCODE_Y : KEYCODE_Z);
}

function isRedo(e) {
  return (e.ctrlKey || e.metaKey) && e.keyCode === (e.shiftKey ? KEYCODE_Z : KEYCODE_Y);
}

function getSelection(el) {
  var start, end, rangeEl, clone;

  if (el.selectionStart !== undefined) {
    start = el.selectionStart;
    end = el.selectionEnd;
  } else {
    try {
      el.focus();
      rangeEl = el.createTextRange();
      clone = rangeEl.duplicate();

      rangeEl.moveToBookmark(document.selection.createRange().getBookmark());
      clone.setEndPoint('EndToStart', rangeEl);

      start = clone.text.length;
      end = start + rangeEl.text.length;
    } catch (e) {/* not focused or not visible */}
  }

  return { start: start, end: end };
}

function setSelection(el, selection) {
  var rangeEl;

  try {
    if (el.selectionStart !== undefined) {
      el.focus();
      el.setSelectionRange(selection.start, selection.end);
    } else {
      el.focus();
      rangeEl = el.createTextRange();
      rangeEl.collapse(true);
      rangeEl.moveStart('character', selection.start);
      rangeEl.moveEnd('character', selection.end - selection.start);
      rangeEl.select();
    }
  } catch (e) {/* not focused or not visible */}
}

var MaskedInput = function (_React$Component) {
  _inherits(MaskedInput, _React$Component);

  function MaskedInput(props) {
    _classCallCheck(this, MaskedInput);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this._onChange = _this._onChange.bind(_this);
    _this._onKeyDown = _this._onKeyDown.bind(_this);
    _this._onPaste = _this._onPaste.bind(_this);
    _this._onKeyPress = _this._onKeyPress.bind(_this);
    return _this;
  }

  MaskedInput.prototype.componentWillMount = function componentWillMount() {
    var options = {
      pattern: this.props.mask,
      value: this.props.value,
      formatCharacters: this.props.formatCharacters
    };
    if (this.props.placeholderChar) {
      options.placeholderChar = this.props.placeholderChar;
    }
    this.mask = new __WEBPACK_IMPORTED_MODULE_2_inputmask_core___default.a(options);
  };

  MaskedInput.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.mask !== nextProps.mask && this.props.value !== nextProps.mask) {
      // if we get a new value and a new mask at the same time
      // check if the mask.value is still the initial value
      // - if so use the nextProps value
      // - otherwise the `this.mask` has a value for us (most likely from paste action)
      if (this.mask.getValue() === this.mask.emptyValue) {
        this.mask.setPattern(nextProps.mask, { value: nextProps.value });
      } else {
        this.mask.setPattern(nextProps.mask, { value: this.mask.getRawValue() });
      }
    } else if (this.props.mask !== nextProps.mask) {
      this.mask.setPattern(nextProps.mask, { value: this.mask.getRawValue() });
    } else if (this.props.value !== nextProps.value) {
      this.mask.setValue(nextProps.value);
    }
  };

  MaskedInput.prototype.componentWillUpdate = function componentWillUpdate(nextProps, nextState) {
    if (nextProps.mask !== this.props.mask) {
      this._updatePattern(nextProps);
    }
  };

  MaskedInput.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.mask !== this.props.mask && this.mask.selection.start) {
      this._updateInputSelection();
    }
  };

  MaskedInput.prototype._updatePattern = function _updatePattern(props) {
    this.mask.setPattern(props.mask, {
      value: this.mask.getRawValue(),
      selection: getSelection(this.input)
    });
  };

  MaskedInput.prototype._updateMaskSelection = function _updateMaskSelection() {
    this.mask.selection = getSelection(this.input);
  };

  MaskedInput.prototype._updateInputSelection = function _updateInputSelection() {
    setSelection(this.input, this.mask.selection);
  };

  MaskedInput.prototype._onChange = function _onChange(e) {
    // console.log('onChange', JSON.stringify(getSelection(this.input)), e.target.value)

    var maskValue = this.mask.getValue();
    if (e.target.value !== maskValue) {
      // Cut or delete operations will have shortened the value
      if (e.target.value.length < maskValue.length) {
        var sizeDiff = maskValue.length - e.target.value.length;
        this._updateMaskSelection();
        this.mask.selection.end = this.mask.selection.start + sizeDiff;
        this.mask.backspace();
      }
      var value = this._getDisplayValue();
      e.target.value = value;
      if (value) {
        this._updateInputSelection();
      }
    }
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  MaskedInput.prototype._onKeyDown = function _onKeyDown(e) {
    // console.log('onKeyDown', JSON.stringify(getSelection(this.input)), e.key, e.target.value)

    if (isUndo(e)) {
      e.preventDefault();
      if (this.mask.undo()) {
        e.target.value = this._getDisplayValue();
        this._updateInputSelection();
        if (this.props.onChange) {
          this.props.onChange(e);
        }
      }
      return;
    } else if (isRedo(e)) {
      e.preventDefault();
      if (this.mask.redo()) {
        e.target.value = this._getDisplayValue();
        this._updateInputSelection();
        if (this.props.onChange) {
          this.props.onChange(e);
        }
      }
      return;
    }

    if (e.key === 'Backspace') {
      e.preventDefault();
      this._updateMaskSelection();
      if (this.mask.backspace()) {
        var value = this._getDisplayValue();
        e.target.value = value;
        if (value) {
          this._updateInputSelection();
        }
        if (this.props.onChange) {
          this.props.onChange(e);
        }
      }
    }
  };

  MaskedInput.prototype._onKeyPress = function _onKeyPress(e) {
    // console.log('onKeyPress', JSON.stringify(getSelection(this.input)), e.key, e.target.value)

    // Ignore modified key presses
    // Ignore enter key to allow form submission
    if (e.metaKey || e.altKey || e.ctrlKey || e.key === 'Enter') {
      return;
    }

    e.preventDefault();
    this._updateMaskSelection();
    if (this.mask.input(e.key || e.data)) {
      e.target.value = this.mask.getValue();
      this._updateInputSelection();
      if (this.props.onChange) {
        this.props.onChange(e);
      }
    }
  };

  MaskedInput.prototype._onPaste = function _onPaste(e) {
    // console.log('onPaste', JSON.stringify(getSelection(this.input)), e.clipboardData.getData('Text'), e.target.value)

    e.preventDefault();
    this._updateMaskSelection();
    // getData value needed for IE also works in FF & Chrome
    if (this.mask.paste(e.clipboardData.getData('Text'))) {
      e.target.value = this.mask.getValue();
      // Timeout needed for IE
      setTimeout(this._updateInputSelection, 0);
      if (this.props.onChange) {
        this.props.onChange(e);
      }
    }
  };

  MaskedInput.prototype._getDisplayValue = function _getDisplayValue() {
    var value = this.mask.getValue();
    return value === this.mask.emptyValue ? '' : value;
  };

  MaskedInput.prototype._keyPressPropName = function _keyPressPropName() {
    if (typeof navigator !== 'undefined') {
      return navigator.userAgent.match(/Android/i) ? 'onBeforeInput' : 'onKeyPress';
    }
    return 'onKeyPress';
  };

  MaskedInput.prototype._getEventHandlers = function _getEventHandlers() {
    var _ref;

    return _ref = {
      onChange: this._onChange,
      onKeyDown: this._onKeyDown,
      onPaste: this._onPaste
    }, _ref[this._keyPressPropName()] = this._onKeyPress, _ref;
  };

  MaskedInput.prototype.focus = function focus() {
    this.input.focus();
  };

  MaskedInput.prototype.blur = function blur() {
    this.input.blur();
  };

  MaskedInput.prototype.render = function render() {
    var _this2 = this;

    var ref = function ref(r) {
      _this2.input = r;
    };
    var maxLength = this.mask.pattern.length;
    var value = this._getDisplayValue();
    var eventHandlers = this._getEventHandlers();
    var _props = this.props,
        _props$size = _props.size,
        size = _props$size === undefined ? maxLength : _props$size,
        _props$placeholder = _props.placeholder,
        placeholder = _props$placeholder === undefined ? this.mask.emptyValue : _props$placeholder;

    var _props2 = this.props,
        placeholderChar = _props2.placeholderChar,
        formatCharacters = _props2.formatCharacters,
        cleanedProps = _objectWithoutProperties(_props2, ['placeholderChar', 'formatCharacters']); // eslint-disable-line


    var inputProps = _extends({}, cleanedProps, eventHandlers, { ref: ref, maxLength: maxLength, value: value, size: size, placeholder: placeholder });
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', inputProps);
  };

  return MaskedInput;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

MaskedInput.propTypes = process.env.NODE_ENV !== "production" ? {
  mask: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,

  formatCharacters: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  placeholderChar: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
} : {};

MaskedInput.defaultProps = {
  value: ''
};

/* harmony default export */ __webpack_exports__["default"] = (MaskedInput);

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addPurchase = exports.addPurchaseSuccess = undefined;

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

var _errorsActions = __webpack_require__(6);

var errorActions = _interopRequireWildcard(_errorsActions);

var _reactRouter = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addPurchaseSuccess = exports.addPurchaseSuccess = function addPurchaseSuccess(purchase) {
    return {
        type: 'ADD_PURCHASE_SUCCESS',
        purchase: purchase
    };
};

var addPurchase = exports.addPurchase = function addPurchase(data) {
    return function (dispatch) {
        return _axios2.default.post('/api/purchased', data).then(function (response) {
            dispatch(addPurchaseSuccess(response.data));
            _reactRouter.browserHistory.push('/dashboard');
        }).catch(function (error) {
            dispatch(errorActions.sendCompanyErrors(error.response.data));
            throw error;
        });
    };
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_PURCHASE_SUCCESS':
            return action.purchase;
        default:
            return state;
    }
};

/***/ })
/******/ ]);