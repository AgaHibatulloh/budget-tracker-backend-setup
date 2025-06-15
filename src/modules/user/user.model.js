module.exports = (sequelize, Datatypes) => {
    const User = sequelize.define('User', {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true,
        },
        uuid: {
            type: Datatypes.UUID,
            allowNull: false,
            defaultValue: Datatypes.UUIDV4,
            unique: true
        },
        name: {
            type: Datatypes.String(50),
            allowNull:false,
        },
        email: {
            type: Datatypes.String(50),
            allowNull: false,
            unique: true,
        },
        number: {
            type: DataTypes.STRING(255),
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
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: false,
        underscored: true

    });

    User.associate = (models) => {
        User.hasMany(models.Transaction, {
            foreignKey: 'user_id',
            as: 'transactions'
        });
        User.hasMany(models,MonthlySummary, {
            foreignKey: 'user_id',
            as: 'summary_user'
        })
    }
    return User;


}