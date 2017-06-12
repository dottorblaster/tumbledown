const fs = require('fs')

function read(path) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, 'utf8', (err, data) => {
			if (err) { return reject(err) }
			resolve(data)
		})
	})
}

module.exports = read
