//Contatos_prestador pertence a um prestador

module.exports = (sequelize, DataTypes) => {
    const Contatos_prestador = sequelize.define("Contatos_prestador", {
            
        celular_principal:{
           type:DataTypes.STRING(11),
           allowNull:false
        },
        celular_secundario:{
            type: DataTypes.STRING(11),
            allowNull: true
        },
        telefone_residencial:{
            type: DataTypes.STRING(15),
            allowNull: true
        },
        telefone_comercial: { 
            type: DataTypes.STRING(10),
            allowNull: true
          },
        email_principal: { 
            type: DataTypes.STRING(190),
            allowNull: false
        },
        email_secundario: { 
            type: DataTypes.STRING(190),
            allowNull: true
        },
        fk_prestador: {
          type: DataTypes.INTEGER,
          allowNull:false
        }
        
    }, {
        timestamps:false,
        tableName: 'contatos_prestador'
    });

    Contatos_prestador.associate = (listaModels) => {
        Contatos_prestador.belongsTo(listaModels.Contatos_prestador, {
            foreignKey: 'fk_prestador',
            as:'prestador'
        })
    }
 
 
    return Contatos_prestador;
};