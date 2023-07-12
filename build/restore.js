const fs = require('fs')
const path = require('path')

const pkgPath = path.resolve(__dirname, '../package.json')
const backupPath = path.resolve(__dirname, '../package.json.bak')

fs.unlinkSync(pkgPath)
fs.renameSync(backupPath, pkgPath)
