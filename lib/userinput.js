const prompt = require('prompt')
const chalk = require('chalk')

const tokenstore = require('./tokenstore')

prompt.message = chalk.blue('Question!')
prompt.delimiter = chalk.yellow('→')

function promptTokens() {
	prompt.get(['token', 'tokenSecret', 'consumerKey', 'consumerSecret'], (err, res) => {
		if (err) {return console.error('Error getting tokens')}

		tokenstore.storeToken(res.token)
		tokenstore.storeTokenSecret(res.tokenSecret)
		tokenstore.storeConsumerKey(res.consumerKey)
		tokenstore.storeConsumerSecret(res.storeConsumerSecret)

		console.log(chalk.blue('Successfully saved tokens!'))
	})
}

module.exports = {
	promptTokens: promptTokens
}
