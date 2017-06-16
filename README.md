# Tumbledown
Easily post markdown files to Tumblr.

## Setup
Just issue:

```
$ npm install -g tumbledown
```

## Usage
Simply issue the post commmand with a path to a markdown file as the argument:

```
$ tumbledown post ~/article.md
```

You can also specify a title:

```
$ tumbledown post ~/article.md -t "This is a title"
```

## Logging in
Just do it:

```
$ tumbledown login
```

You will be asked for your Tumblr API keys, and then for the blog post the contents on. That's it.

For details about authentication, have a look at the [official documentation](https://www.tumblr.com/docs/en/api/v2#auth) and at the [tumblr.js docset](https://github.com/tumblr/tumblr.js#authentication) too. I'm looking forward to implement a new login prompt using the OAuth scheme.
