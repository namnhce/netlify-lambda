const awsServerlessExpress = require('aws-serverless-express')
const page = require('./.next/serverless/pages/index')
const server = awsServerlessExpress.createServer((req, res) => page.render(req, res))

exports.handler = (event, context, callback) => {
  console.log(event)

  // awsServerlessExpress.proxy(server, event, context, 'CALLBACK', callback)
  awsServerlessExpress.proxy(server, event, context)
}
