const fs = require('fs')
const path = require('path')

const pkgPath = path.resolve(__dirname, '../package.json')
const backupPath = path.resolve(__dirname, '../package.json.bak')
if (fs.existsSync(backupPath)) {
  throw new Error('package.json.bak 已存在，请先删除')
}
fs.copyFileSync(pkgPath, backupPath)
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
delete pkg.scripts
delete pkg.devDependencies
delete pkg['lint-staged']
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), 'utf-8')
