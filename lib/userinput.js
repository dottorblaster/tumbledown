const chalk = require('chalk')
const inquirer = require('inquirer')
const clispinner = require('cli-spinner').Spinner

const blueify = require('./blueify')
const tokenstore = require('./tokenstore')
const blogs = require('./tumblr').blogs

function configuredSpinner(text) {
	const spinner = new clispinner(text)
	spinner.setSpinnerString(11)
	return spinner
}

function promptTokens() {
	return new Promise((resolve, reject) => {
		inquirer.prompt([
			{
				type: 'input',
				message: 'Please type in the token',
				name: 'token'
			},
			{
				type: 'input',
				message: 'Please type in the tokenSecret',
				name: 'tokenSecret'
			},
			{
				type: 'input',
				message: 'Please type in the consumerKey',
				name: 'consumerKey'
			},
			{
				type: 'input',
				message: 'Please type in the consumerSecret',
				name: 'consumerSecret'
			}
		]).then(answers => {
			tokenstore.storeToken(answers.token)
			tokenstore.storeTokenSecret(answers.tokenSecret)
			tokenstore.storeConsumerKey(answers.consumerKey)
			tokenstore.storeConsumerSecret(answers.consumerSecret)

			blueify('Successfully saved tokens.\n')
			resolve(answers)
		}).catch(err => {
			reject(err)
		})
	})
}

function promptBlogs() {
	const spinner = configuredSpinner('Getting data about your blogs...')
	spinner.start()

	blogs().then(blogs => {
		spinner.stop()

		inquirer.prompt({
			type: 'list',
			message: 'Which blog?',
			name: 'blog',
			choices: blogs
		}).then(answers => {
			tokenstore.storeBlog(answers.blog)
		}).catch(err => {
			console.log(err)
		})

	}).catch(err => {
		console.log(err)
		spinner.stop()
	})
}

module.exports = {
	promptTokens: promptTokens,
	promptBlogs: promptBlogs
}
