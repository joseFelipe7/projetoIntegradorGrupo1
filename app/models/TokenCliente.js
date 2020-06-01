module.exports = (sequelize, DataTypes) => {
    const TokenCliente = sequelize.define("TokenCliente", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        hash: { 
            type: DataTypes.STRING(255),
            allowNull: false, //pode ser nulo? não
            unique: true,
        },
        usado: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false, //pode ser nulo? não
            unique: false,
        },
        clientes_id: { 
            type: DataTypes.INTEGER, 
            allowNull: false 
        },
         
    }, {
        timestamps:false,
        tableName: 'token_cliente'
    });
    return TokenCliente;
};