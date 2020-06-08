
module.exports = (sequelize, DataTypes) => {
    const Contatos = sequelize.define("Contatos", {
             
        celular_principal:{
           type:DataTypes.STRING(11),
           allowNull:true        },
        celular_secundario:{
            type: DataTypes.STRING(11),
            allowNull: true
        },
        telefone_residencial:{
            type: DataTypes.STRING(15),
            allowNull: true
        },
        email_principal: { 
            type: DataTypes.STRING(190),
            allowNull:true        },
        email_secundario: { 
            type: DataTypes.STRING(190),
            allowNull: true
        },
        fk_cliente:{
            type: DataTypes.INTEGER
        }
    }, {
        timestamps:false,
        tableName: 'contatos'
    });

    Contatos.associate = (listaModels) => {
        Contatos.belongsTo(listaModels.Cliente, {
          foreignKey: 'fk_cliente',
          as: 'cliente'
        })
      }
 
    return Contatos;
};