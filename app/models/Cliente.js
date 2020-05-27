module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define("Cliente", {
        id:{
            primaryKey:true,
            autoIncrement:true,
            type:DataTypes.INTEGER 
          },
        nome:{
            type:DataTypes.STRING(190),
            allowNull:false
          },
        email:{
           type:DataTypes.STRING(190),
           allowNull:false
          },
        senha:{
            type:DataTypes.STRING,
            allowNull:false
          },
        data_nascimento:DataTypes.DATE,
        status_:DataTypes.CHAR(1),
        cpf:{
          type:DataTypes.STRING(11),
          unique:true
        },
        avatar:DataTypes.STRING(190),
        extensao_avatar:DataTypes.CHAR(5),
        data_cadastro:DataTypes.DATE
         
    }, {
        timestamps:false,
        tableName: 'clientes'
    });
    return Cliente;
};