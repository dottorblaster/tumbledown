#!/usr/bin/env node

const cli = require('commander')
var lib = require('../lib/index')

cli
	.command('login')
	.description('Setup your tokens for use with Tumbleweed')
	.action(lib.login)

cli
	.command('post <path>')
	.description('Post a markdown file')
	.option('-t, --title [string]', 'Title for the post')
	.action(lib.post)

cli
	.version('1.0.0')


cli.parse(process.argv)
