const { Sequelize } = require('sequelize')
const express = require ('express')
const app = express()
const { CategoryA } = require('./src/models/CategoryA')
const {getAllData} = require ('./src/controllers/controllers')


app.use(express.json())


app.get('/module', async (req, res,next) => {
  res.send('module rendering')
})

app.get('/cat', async (req, res,next) => {
  const name = req.query.name;
  let allCategory = getAllData()
  if (name) {
    let dataName = allCategory.filter((ob) => ob.name.includes(name))
    dataName.length
    ?res.status(202).send(dataName.length) 
    :res.status(404).send('not found')
  } 
})


app.listen(3000, () => {
  console.log('Server ejecutando en http://localhost:3000')
})




  