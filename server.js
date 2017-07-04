import express from 'express';
import router from './routes/index';
import api from './routes/api';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//db options
let options = {
                server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
              };

// db connection
mongoose.connect('mongodb://127.0.0.1:27017', options);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


app.use('/bin', express.static('./bin'));
app.use('/stylesheets', express.static('./public/stylesheets'));


app.use('/', router);
app.use('/view/*', router);

app.use('/api', api);
app.use('/api/*', api);

app.listen(3000, function () {
	console.log('Hello World listening on port 3000!');
});

export default app;
