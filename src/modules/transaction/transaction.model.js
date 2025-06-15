const { all } = require("axios")

module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true,
        },
        type: {
            type: DataTypes.ENUM('income', 'expense'),
            allowNull: false,
        },
        amount: {
            tyype: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        note: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        created_at: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: 'transactions',
        timestamps: true,
        underscored: true,
    });

    Transaction.associate = (models) => {
        Transaction.belongsTo(models.User, { foreignKey: 'user_id', as : 'user' });
        Transaction.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' });

    
    };
    return Transaction;
}
