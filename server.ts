// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';
var fs = require('fs');

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = module.exports = express();

const PORT = process.env.PORT || 443;
const DIST_FOLDER = join(process.cwd(), 'riot-api-client/dist');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle');

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

// Add headers
app.use(function (req, res, next) {
var allowedOrigins = ['http://localhost:4200', 'https://guideslol.com', 'http://guideslol.com', 'http://www.guideslol.com', 'http://54.36.43.4:4000', 'http://localhost:4000'];

var origin = req.headers.origin;
if(allowedOrigins.indexOf(origin) > -1){
  res.setHeader('Access-Control-Allow-Origin', origin);
}

res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS, PATCH, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
res.setHeader('Access-Control-Allow-Credentials', true);
next();
});

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// TODO: implement data requests securely
app.get('/api/*', (req, res) => {
  res.status(404).send('data requests are not supported');
});

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render(join(DIST_FOLDER, 'browser', 'index.html'), { req });
});


const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/guideslol.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/guideslol.com/fullchain.pem')
};

require('https').createServer(options, app);
