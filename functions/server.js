const url = require('url')
const q = require('query-string')
const awsServerlessExpress = require('aws-serverless-express')

exports.handler = (event, context, callback) => {
  const reqUrl = url.parse(event.headers.referer || '')
  const [pathname, queryParams] = [reqUrl.pathname, q.parse(reqUrl.search)]

  console.log({ pathname, queryParams })

  const indexPage = require('./.next/serverless/pages/index')
  const aboutPage = require('./.next/serverless/pages/about')
  const server = awsServerlessExpress.createServer((req, res) => page.render(req, res))

  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise
}
