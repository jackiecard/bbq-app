import express from 'express';
import mongoose from 'mongoose';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../views/src/routes';
import reducers from '../views/src/reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { SIGNUP_SUCCESS } from '../views/src/actions/signupActions';

let router = express.Router();

//db options
let options = {
                server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
              };

// db connection
mongoose.connect('mongodb://127.0.0.1/my_database', options);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


router.get('/', (req, res) => {
    /*
    Here we are first matching if the current url exists in the react router routes
     */
	match({ routes, location: req.originalUrl }, (error, redirectLocation, renderProps) => {
		if (error) {
			res.status(500).send(error.message)
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search)
		} else if (renderProps) {

		    /*
             http://redux.js.org/docs/recipes/ServerRendering.html
		     */
			const store = createStore(reducers);

			const html = ReactDOMServer.renderToString(
				<Provider store={store}>
					<RouterContext {...renderProps} />
				</Provider>
			);

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

			const finalState = store.getState();

			res.status(200).send(renderFullPage(html, finalState));
		} else {
			res.status(404).send('Not found')
		}
	})
});

router.get('/teste', (req, res) => {
    
    res.json("testando...")
});




/*
In this function, you can render you html part of the webpage. You can add some meta tags or Opern Graph tags
using JS variables.
 */
function renderFullPage(html, initialState) {
	return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    	<!-- Required meta tags always come first -->
    	<meta charset="utf-8">
    	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    	<meta http-equiv="x-ua-compatible" content="ie=edge">
    	<title>React Router Redux Express</title>
    </head>
    <body>

    	<div id="app"><div>${html}</div></div>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
          </script>
    	<script src="../bin/app.bundle.js"></script>
    	<!-- jQuery first, then Bootstrap JS. -->
    	<script src="https://www.atlasestateagents.co.uk/javascript/tether.min.js"></script>
        <script src="http://localhost:35729/livereload.js"></script>
    </body>
    </html>
    `
}

export default router;
