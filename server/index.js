const Koa = require('koa')
const app = new Koa()
const cors = require('koa2-cors')
const { runpath } = require('./execPy')
const path = require('path')
// const KoaStatic = require('koa-static')
// const KoaMount = require('koa-mount')
// const convert = require('koa-convert')
const fs = require('fs')

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
  if (ctx.url.indexOf('/api/py') > -1) {
    console.log(`ctx.query: `, ctx.query)
    const query = ctx.query
    const result = await runpath(query.scriptName, query.imageName)
    console.log(`Server result: `, result)
    ctx.body = result[0]
  }
  if (ctx.url.indexOf('/api/images') > -1) {
    const urlPathArr = ctx.url.split('/')
    const imgName = urlPathArr[urlPathArr.length - 1]
    const imgPath = path.join(__dirname, `./python/images/${imgName}`)
    console.log(`读取的图片路劲是： ${imgPath}`)
    const data = fs.readFileSync(imgPath)
    ctx.body = data
  }
})

// app.use(convert(KoaStatic(path.join(__dirname, './python/images/'), {
//   pathPrefix: ''
// })))

// const imagePath = path.join(__dirname, './python/images/')
// app.use(KoaMount('/api/images', KoaStatic(imagePath)))

app.listen(3000)

console.log('start-quick is starting at port 3000')
