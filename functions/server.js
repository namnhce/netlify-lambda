const awsServerlessExpress = require('aws-serverless-express')
const page = require('../.next/serverless/pages/index')
const server = awsServerlessExpress.createServer((req, res) => page.render(req, res))

exports.handler = async (event, context, callback) => {
  console.dir(event)

  console.log(page)

  awsServerlessExpress.proxy(server, event,context, 'CALLBACK',callback)
}
