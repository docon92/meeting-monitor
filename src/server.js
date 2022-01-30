const express = require('express')
const cors = require('cors')
const execSync = require('child_process').execSync

const app = express()
const port = 3001

app.use(cors())

app.get('/devices/inUse', (req, res) => {
  console.log('received request!')
  try{
    _lInUse = execSync('if [ -z $(fuser /dev/video*) ]; then echo 0; else echo 1; fi').toString();
    console.log('In use: ', _lInUse)
    res.send(+_lInUse===1);
  } catch (err) { 
    console.log('Error in execSync: ', err)
    res.send(false);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

