var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var port = 3000;
var serverChecking = 'http://52.53.216.101/';
var serverGallery = 'http://54.153.43.37:3000/';
var serverRecommendations = 'http://13.56.246.160/';

app.use(express.static('./client'))

app.all('/listings', function(req, res) {
  apiProxy.web(req, res, {
    target: serverChecking
  })
});

app.get('/bookings/available/:listingId', (req, res) => {
  apiProxy.web(req, res, {
    target: serverChecking
  })
})

app.all('/gallery/:listingid', (req, res) => {
  apiProxy.web(req, res, {
    target: serverGallery
  });
});

app.get('/recommendations', (req, res) => {
  apiProxy.web(req, res, {
    target: serverRecommendations
  })
});

app.post('/recommendations/seed', (req, res) => {
  apiProxy.web(req, res, {
    target: serverRecommendations
  })
});

app.post('/recommendations/save', (req, res) => {
  apiProxy.web(req, res, {
      target: serverRecommendations
  })
});

app.post('/recommendations/unsave', (req, res) => {
  apiProxy.web(req, res, {
    target: serverRecommendations
  })
});

app.listen(port, console.log(`${port} is lisenting!`));