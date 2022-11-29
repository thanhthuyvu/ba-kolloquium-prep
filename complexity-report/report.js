// https://www.npmjs.com/package/typhonjs-escomplex
const escomplex = require('typhonjs-escomplex')
const fs = require('fs')

base_path   = process.argv[2]
file_path   = process.argv[3]
output_path = process.argv[4]
file_name   = file_path.replace(base_path, '').replace(/\//g, '_').replace(/\./g, '_') + '.json'
console.log(file_name)

fs.readFile(`${file_path}`, 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  const report = escomplex.analyzeModule(data)
  fs.writeFile(`${output_path}${file_name}`, JSON.stringify(report.methods), err => {
    if (err) {
      console.log("Error occured: " + err)
      process.exit(1)
    }
  })
})
