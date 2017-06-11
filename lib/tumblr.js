const tumblr = require('tumblr.js')
const tokenstore = require('./tokenstore')
const blueify = require('./blueify')

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

function post() {
    // TODO
}

module.exports = {
    blogs: blogs,
    post: post
}
