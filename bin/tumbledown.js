#!/usr/bin/env node

const cli = require('commander')
var lib = require('../lib/index')

cli
	.command('login')
	.description('Setup your tokens for use with Tumbleweed')
	.action(lib.login)

cli
	.command('showtokens')
	.description('Shows off tokens for API access')
	.action(lib.showtokens)

cli
	.command('post')
	.description('Post a markdown file')
	.action(lib.post)

cli.parse(process.argv)
