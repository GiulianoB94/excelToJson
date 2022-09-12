import { Sequelize } from 'sequelize';
import { setupModels } from ('../models/index')


const sequelize = new Sequelize('categories', 'giuliano', 'giuliano', {
  host: 'localhost',
  dialect: 'postgres'
})

setupModels(sequelize)

sequelize.sync({force: false})

module.exports = sequelize