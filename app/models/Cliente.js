module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define("Cliente", {
       
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

    Cliente.associate = (listaModels) => {
      Cliente.hasMany(listaModels.Clientes_endereco, {
        foreignKey: 'fk_cliente',
        as: 'clientes_enderecos'
      }),
      Cliente.hasMany(listaModels.Contatos, {
        foreignKey: 'fk_cliente',
        as: 'contatos'
      }),
      Cliente.hasMany(listaModels.Avaliacoes, {
        foreignKey: 'fk_cliente',
        as: 'cliente'
      })
    }
    
    return Cliente;
};
