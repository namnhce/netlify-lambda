const url = require('url')
const q = require('query-string')
const awsServerlessExpress = require('aws-serverless-express')
const page = require('./.next/serverless/pages/index')
const server = awsServerlessExpress.createServer((req, res) => page.render(req, res))

exports.handler = (event, context, callback) => {
  console.log(event)
  console.log(event.headers.referer)

  const reqUrl = url.parse(event.headers.referer)
  console.log(reqUrl.pathname, q.parse(reqUrl.search))

  // awsServerlessExpress.proxy(server, event, context, 'CALLBACK', callback)
  awsServerlessExpress.proxy(server, event, context)
}
