const awsServerlessExpress = require('aws-serverless-express')
const page = require('./.next/serverless/index')
const server = awsServerlessExpress.createServer((req, res) => page.render(req, res))

exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context)
}
