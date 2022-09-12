import { Sequelize } from 'sequelize';

module.exports = (sequelize) => {
	sequelize.define(
		"categoryC",
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
	)
}