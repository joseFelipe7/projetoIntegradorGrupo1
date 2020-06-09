module.exports = (sequelize, DataTypes) => {
    const TokenPrestador = sequelize.define("TokenPrestador", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        hash: { 
            type: DataTypes.STRING(255),
            allowNull: false, 
            unique: true,
        },
        usado: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false,
            unique: false,
        },
        prestador_id: { 
            type: DataTypes.INTEGER, 
            allowNull: false 
        },
         
    }, {
        timestamps:false,
        tableName: 'Token_prestador'
    });
    TokenPrestador.associate = (listaModels) => {
        TokenPrestador.belongsTo(listaModels.Prestador, {
            foreignKey: 'prestador_id',
            as: 'prestador'
        })
    }


    return TokenPrestador;
};