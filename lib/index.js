const input = require('./userinput')
const blueify = require('./blueify')
const tokenstore = require('./tokenstore')

function login() {
	input.promptTokens().then(s => {
		blueify('Keys set!')
		input.promptBlogs()
	})
}

function post() {
	// TODO
}

module.exports = {
	login: login,
	post: post
}