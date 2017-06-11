const input = require('./userinput')
const blueify = require('./blueify')
const read = require('./read')

function login() {
	input.promptTokens().then(() => {
		blueify('Keys set!')
		input.promptBlogs()
	})
}

function post(path, options) {
	var title = options.title || ""

	console.log('kek')

	read(path).then((data) => {
		console.log(data)
	}).catch((err) => {
		blueify('Error reading file\n')
	})
}

module.exports = {
	login: login,
	post: post
}