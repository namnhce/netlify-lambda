const url = require('url')
const q = require('query-string')
const awsServerlessExpress = require('aws-serverless-express')

exports.handler = async (event, context, callback) => {
  const reqUrl = url.parse(event.headers.referer || '')
  console.log(reqUrl.pathname, q.parse(reqUrl.search))

  // awsServerlessExpress.proxy(server, event, context, 'CALLBACK', callback)

  const page = require('./.next/serverless/pages/index')
  const server = awsServerlessExpress.createServer((req, res) => page.render(req, res))

  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise
}
