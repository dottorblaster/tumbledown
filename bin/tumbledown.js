#!/usr/bin/env node

'use strict';

const cli = require('commander')
var lib = require('../lib/index')

cli
	.command('login')
	.description('Setup your tokens for use with Tumbledown')
	.action(lib.login)

cli
	.command('post <path>')
	.description('Post a markdown file')
	.option('-t, --title [string]', 'Title for the post')
	.action(lib.post)

cli
	.version(require('../package.json').version)
	.parse(process.argv)

if (!process.argv.slice(2).length) {
	cli.outputHelp()
}
