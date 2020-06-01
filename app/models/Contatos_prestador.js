module.exports = (sequelize, DataTypes) => {
    const Contatos_prestador = sequelize.define("Contatos_prestador", {
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
        fk_prestador:{
            type: DataTypes.INTEGER
        }
        
    }, {
        timestamps:false,
        tableName: 'contatos_prestador'
    });

  
 
    return Contatos_prestador;
};