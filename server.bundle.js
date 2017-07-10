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
                'Logout'
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
                        'nothing'
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
                        '50'
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
                    null,
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemListComponent = function (_React$Component) {
    _inherits(ItemListComponent, _React$Component);

    function ItemListComponent(props) {
        _classCallCheck(this, ItemListComponent);

        return _possibleConstructorReturn(this, (ItemListComponent.__proto__ || Object.getPrototypeOf(ItemListComponent)).call(this, props));
    }

    _createClass(ItemListComponent, [{
        key: 'generateRows',
        value: function generateRows() {
            if (this.props.items === 0) {
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

            var data = this.props.items;

            return data.map(function (item) {

                return _react2.default.createElement(
                    'tr',
                    { key: item.name },
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
                        'X'
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
                _react2.default.createElement(
                    'table',
                    null,
                    _react2.default.createElement(
                        'tbody',
                        null,
                        this.generateRows()
                    )
                )
            );
        }
    }]);

    return ItemListComponent;
}(_react2.default.Component);

;

exports.default = ItemListComponent;

/***/ }),
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

var _ItemPurchasePage = __webpack_require__(37);

var _ItemPurchasePage2 = _interopRequireDefault(_ItemPurchasePage);

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
        key: 'handleCompanyChange',
        value: function handleCompanyChange(e) {

            console.log(e.target.value);
        }
    }, {
        key: 'generateCompanyOptions',
        value: function generateCompanyOptions() {
            if (!this.props.companies) {
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
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_MenuComponent2.default, null),
                _react2.default.createElement(
                    'h1',
                    null,
                    'New Purchase'
                ),
                _react2.default.createElement(_ItemPurchasePage2.default, null),
                _react2.default.createElement(
                    'form',
                    { onSubmit: function onSubmit(e) {
                            e.preventDefault();

                            e.target.reset();
                        } },
                    _react2.default.createElement(
                        'select',
                        { onChange: this.handleCompanyChange },
                        this.generateCompanyOptions()
                    ),
                    _react2.default.createElement(
                        'button',
                        { type: 'submit' },
                        'Purchase'
                    )
                )
            );
        }
    }]);

    return NewPurchasePage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return { companies: state.company.list };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        // addItemName: userInput => dispatch(loginActions.addItemName(userInput))
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
                nameInput = null;
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
                                cnpj: cnpjInput.value,
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
                    _react2.default.createElement('input', { type: 'text',
                        ref: function ref(node) {
                            return cnpjInput = node;
                        },
                        name: 'cnpj' }),
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'name' },
                        'Name'
                    ),
                    _react2.default.createElement('input', {
                        type: 'name',
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

var _errorsReducers = __webpack_require__(30);

var _errorsReducers2 = _interopRequireDefault(_errorsReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    signup: _signupReducers2.default, errors: _errorsReducers2.default, login: _loginReducers2.default, company: _companyReducers2.default, item: _itemReducers2.default
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _ItemListComponent = __webpack_require__(23);

var _ItemListComponent2 = _interopRequireDefault(_ItemListComponent);

var _itemActions = __webpack_require__(38);

var itemActions = _interopRequireWildcard(_itemActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemPurchasePage = function (_React$Component) {
    _inherits(ItemPurchasePage, _React$Component);

    function ItemPurchasePage(props, currentItem) {
        _classCallCheck(this, ItemPurchasePage);

        var _this = _possibleConstructorReturn(this, (ItemPurchasePage.__proto__ || Object.getPrototypeOf(ItemPurchasePage)).call(this, props));

        console.log('items-------', _this.props.items);
        return _this;
    }

    _createClass(ItemPurchasePage, [{
        key: 'generateProductsOptions',
        value: function generateProductsOptions(products) {
            if (!products) {
                return;
            }
            return products.map(function (product) {
                return _react2.default.createElement(
                    'option',
                    { key: product,
                        value: product },
                    product
                );
            });
        }
    }, {
        key: 'handleAddItem',
        value: function handleAddItem(itemInput) {
            this.props.actions.addItem(itemInput);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var items = this.props.items || [{ name: 'Beer', quantity: '2' }];

            var products = ['Bread', 'Beer', 'Meat', 'Chocolate', 'Tomatoes', 'Sausage'];

            var nameInput,
                quantityInput = null;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'form',
                    { onSubmit: function onSubmit(e) {
                            e.preventDefault();

                            var itemInput = {
                                name: nameInput.value,
                                quantity: quantityInput.value
                            };

                            _this2.handleAddItem(itemInput);

                            e.target.reset();
                        } },
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
                        ref: function ref(node) {
                            return quantityInput = node;
                        },
                        name: 'quantity' }),
                    _react2.default.createElement(
                        'button',
                        { type: 'submit' },
                        'Add'
                    )
                ),
                _react2.default.createElement(_ItemListComponent2.default, { items: items })
            );
        }
    }]);

    return ItemPurchasePage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return { items: state.item.list };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        actions: {
            addItem: function addItem(item) {
                return dispatch(itemActions.addItem(item));
            },
            removeItem: function removeItem(item) {
                return dispatch(itemActions.removeItem(item));
            }
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ItemPurchasePage);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeItem = exports.addItem = exports.removeItemSuccess = exports.addItemSuccess = undefined;

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

var _errorsActions = __webpack_require__(6);

var errorActions = _interopRequireWildcard(_errorsActions);

var _reactRouter = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addItemSuccess = exports.addItemSuccess = function addItemSuccess(item) {
    return {
        type: 'ADD_ITEM',
        item: item
    };
};

var removeItemSuccess = exports.removeItemSuccess = function removeItemSuccess(item) {
    return {
        type: 'REMOVE_ITEM',
        item: item
    };
};

var addItem = exports.addItem = function addItem(item) {
    return function (dispatch) {
        return _axios2.default.post('/api/items', item).then(function (response) {
            dispatch(addItemSuccess(response.data));
        }).catch(function (error) {
            dispatch(errorActions.sendItemErrors(error.response.data));
            throw error;
        });
    };
};

var removeItem = exports.removeItem = function removeItem(item) {
    return function (dispatch) {
        return dispatch(removeItemSuccess(item));
    };
};

/***/ })
/******/ ]);