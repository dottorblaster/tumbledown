const Conf = require('conf')
const config = new Conf()

function storeToken(token) {
	config.set('token', token)
}

function storeTokenSecret(s) {
	config.set('tokenSecret', s)
}

function storeConsumerKey(k) {
	config.set('consumerKey', k)
}

function storeConsumerSecret(s) {
	config.set('consumerSecret', s)
}

function getToken() {
	return config.get('token')
}

function getTokenSecret() {
	return config.get('tokenSecret')
}

function getConsumeryKey() {
	return config.get('consumerKey')
}

function getConsumerSecret() {
	return config.get('consumerSecret')
}

module.exports = {
	storeToken: storeToken,
	storeTokenSecret: storeTokenSecret,
	storeConsumerKey: storeConsumerKey,
	storeConsumerSecret: storeConsumerSecret,
	getToken: getToken,
	getTokenSecret: getTokenSecret,
	getConsumeryKey: getConsumeryKey,
	getConsumerSecret: getConsumerSecret
}
