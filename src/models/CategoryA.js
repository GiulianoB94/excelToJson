const {Model, DataTypes, Sequelize } = require('sequelize')

const CATEGORY_A_TABLE = 'categoryA'

const CategoryASchema =  
		{
		id: {
			allowNull: false,
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		isBanned: {
			allowNull: false,
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		createdAt: {
			allowNull: false,
			type: DataTypes.DATE,
			defaultValue: Sequelize.NOW,
	
			field: 'created_at'
		}
	}

class CategoryA extends Model {
	static config(sequelize) {
		return {
			sequelize, 
			tableName: CATEGORY_A_TABLE,
			modelName: 'CategoryA',
			timeStamps: false
		}
	}
}


module.exports = {
	CategoryASchema,
	CategoryA,
	CATEGORY_A_TABLE 
}