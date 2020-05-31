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
          allowNull:false,
          unique:true
        },
        avatar:DataTypes.STRING(190),
        extensao_avatar:DataTypes.CHAR(5),
        data_cadastro:DataTypes.DATE,
        
         
    }, {
        timestamps:false,
        tableName: 'clientes'
    });

    Cliente.associiate = (listaDeModelos ) => {
      Cliente.hasMany(listaDeModelos.Contatos, {
        foreignKey: 'fk_contatos',
        as: 'contatos'
      })
    },
    Cliente.associiate = (listaDeModelos ) => {
      Cliente.hasMany(listaDeModelos.Clientes_endereco, {
        foreignKey: 'fk_clientes_endereco',
        as: 'clientes_endereco'
      })
    }
    return Cliente;
};