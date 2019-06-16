const Koa = require('koa')
const app = new Koa()
const cors = require('koa2-cors')
const { runpath } = require('./execPy')

app.use(
  cors({
    origin: '*',
    maxAge: 1000,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
  })
)

app.use(async ctx => {
  console.log(`ctx.query: `, ctx.query)
  const query = ctx.query
  const path = query.path
  const result = await runpath(path)
  console.log(`Server result: `, typeof result[0])
  ctx.body = result[0]
})

app.listen(3000)

console.log('start-quick is starting at port 3000')
