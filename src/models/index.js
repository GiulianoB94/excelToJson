const { CategoryASchema, CategoryA, CATEGORY_A_TABLE } = require('./CategoryA')


function setupModels (sequelize) {
	CategoryA.init(CategoryASchema, CategoryA.config(sequelize))
}

module.exports = setupModels
