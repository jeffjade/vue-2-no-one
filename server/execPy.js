// let { spawn } = require('child_process')
let { PythonShell } = require('python-shell')
const path = require('path')

// const _execPyScript = function(pyname, callback, paramslist) {
//   const pypath = path.join(__dirname, 'python', pyname)
//   return new Promise((resolve, reject) => {
//     try {
//       let spwanparmas = [pypath]
//       if (paramslist) {
//         paramslist.forEach((value) => {
//           value != '' && spwanparmas.push(value)
//         })
//       }
//       let spawnObj = spawn('python', spwanparmas, { encoding: 'utf-8' })
//       spawnObj.stdout.on('data', function(chunk) {
//         console.log('success : ' + chunk.toString())
//         callback && callback({ data: chunk.toString(), pypath })
//       })
//       spawnObj.stderr.on('data', function(chunk) {
//         console.log('err : ' + chunk.toString())
//         reject({ data: `执行${pypath} 错误:${chunk}`, pypath })
//         // callback && callback({data:chunk.toString(),pypath})
//       })
//       spawnObj.on('close', function(code) {
//         console.log('close code : ' + code)
//       })
//     } catch (error) {
//       console.error(`Something Error:`, error)
//       reject({ data: `执行${pypath} 异常:${error}`, pypath })
//     }
//   })
// }

// const runpath = (path, callback) => {
//   _execPyScript(path, callback).then(
//     data => {
//       console.log('执行 python 文件成功 :', data)
//     },
//     err => {
//       console.log('执行 python 路劲错误 :', err)
//       callback(err)
//     }
//   )
// }

const runpath = pyname => {
  const pypath = path.join(__dirname, 'python', pyname)
  return new Promise((resolve, reject) => {
    PythonShell.run(pypath, null, (err, results) => {
      if (err) {
        reject([])
        throw err
      }
      resolve(results)
    })
  })
}

module.exports = {
  runpath
}
