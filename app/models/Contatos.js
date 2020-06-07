
module.exports = (sequelize, DataTypes) => {
    const Contatos = sequelize.define("Contatos", {
        id:{
            primaryKey:true,
            autoIncrement:true,
            type:DataTypes.INTEGER 
        },       
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
        email_principal: { 
            type: DataTypes.STRING(190),
            allowNull: false
        },
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

    Contatos.associate = (listaDeModelos) => {
        Contatos.belongsTo(listaDeModelos.Cliente, {
          foreignKey: 'fk_cliente',
          as: 'cliente'
        })
      }
 
    return Contatos;
};