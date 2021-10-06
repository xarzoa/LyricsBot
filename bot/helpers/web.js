const express = require('express')
const app = express()

const web = (port) => {
  app.set('views' , './bot/helpers')
  app.set('view engine' ,'ejs')
  app.get('/', (req, res) => {
  res.render('index')
  })
    
  app.listen(port)
}

module.exports = {web}