const input = require('./userinput')
const blueify = require('./blueify')
const read = require('./read')
const tumblr = require('./tumblr')

function login() {
	input.promptTokens().then(() => {
		blueify('Keys set!')

		// Note for future self
		//
		// This function encapsulates tumblr's logic for blog choice.
		// You should get the list and *then* pass it to the prompt.
		// This way you could escape a useless require in the input module.
		input.promptBlogs()
	})
}

function post(path, options) {
	var title = options.title || ''

	read(path).then((data) => {
		tumblr.post(data, title).then(() => {
			blueify('All right sparkly!\n')
		}).catch((err) => {
			blueify('Error posting\n')
			console.error(err)
		})
	}).catch(() => {
		blueify('Error reading file\n')
	})
}

module.exports = {
	login: login,
	post: post
}