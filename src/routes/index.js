const rootRoute = require('express').Router()

const welcomeRoute = require('./welcome');
const webhookRoute = require('./webhook');
const messageRoute = require('./message');
const messageController = require('../controllers/message');

rootRoute.use('/', welcomeRoute);
rootRoute.use('/messages', messageRoute);
rootRoute.use('/summary', messageController.summary);
rootRoute.use('/webhook', webhookRoute);


module.exports = rootRoute;