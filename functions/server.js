const url = require('url')
const awsServerlessExpress = require('aws-serverless-express')
const page = require('./.next/serverless/pages/index')
const server = awsServerlessExpress.createServer((req, res) => page.render(req, res))

exports.handler = (event, context, callback) => {
  console.log(event)
  console.log(event.headers.referer)

  const reqUrl = new URL(event.headers.referer)

  console.log(reqUrl)

  // awsServerlessExpress.proxy(server, event, context, 'CALLBACK', callback)
  awsServerlessExpress.proxy(server, event, context)
}
