const { calculateComplexity } = require('codehawk-cli')
const fs = require('fs')

fs.readFile('/Users/thanhthuyvu/code/mocha/lib/mocha.js', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const metrics = calculateComplexity(data)
  console.log(metrics)
})
