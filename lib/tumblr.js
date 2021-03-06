'use strict';

const tumblr = require('tumblr.js')
const tokenstore = require('./tokenstore')

function client() {
	return tumblr.createClient({
		consumer_key: tokenstore.getConsumeryKey(),
		consumer_secret: tokenstore.getConsumerSecret(),
		token: tokenstore.getToken(),
		token_secret: tokenstore.getTokenSecret(),
		returnPromises: true
	})
}

function blogs() {
	return new Promise((resolve, reject) => {
		client().userInfo().then(res => {
			var blogs = res.user.blogs.map(blog => {
				return {
					name: blog.title,
					value: blog.name
				}
			})
			resolve(blogs)
		}).catch(err => {
			reject(err)
		})
	})
}

function post(data, title) {
	var opts = {
		type: 'text',
		format: 'markdown',
		title: title,
		body: data
	}

	return client().createTextPost(tokenstore.getBlog(), opts)
}

module.exports = {
	blogs: blogs,
	post: post
}
