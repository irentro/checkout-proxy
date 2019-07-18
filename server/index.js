var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var serverOne = 'http://127.0.0.1:3000';

app.use(express.static('./client'))

app.all('/listings', function(req, res) {
    apiProxy.web(req, res, {target: serverOne, changeOrigin: true})
});

app.all('/app1', (req, res) => {
    // console.log('redirecting to  the app1');
    proxy.web(req, res, {target: 'http://127.0.0.1:4001', changeOrigin: true})
  });
  
  app.all('/recommendations', (req, res) => {
    // console.log('redirecting to  the app1');
    proxy.web(req, res, {target: 'http://127.0.0.1:4001', changeOrigin: true})
  });
  
  app.all('/recommendations/save', (req, res) => {
    // console.log('redirecting to  the app1');
    proxy.web(req, res, {target: 'http://127.0.0.1:4001', changeOrigin: true})
  });
  
  app.all('/recommendations/unsave', (req, res) => {
    // console.log('redirecting to  the app1');
    proxy.web(req, res, {target: 'http://127.0.0.1:4001', changeOrigin: true})
  });

app.listen(3001, console.log(`3001 is lisenting!`));