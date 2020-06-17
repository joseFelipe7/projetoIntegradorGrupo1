module.exports = (sequelize, DataTypes) => {
    const Prestador = sequelize.define("Prestador", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
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
        cpf:DataTypes.INTEGER,
        avatar:DataTypes.STRING(190),
        extensao_avatar:DataTypes.CHAR(5),
        data_cadastro:DataTypes.DATE
         
    }, {
        timestamps:false,
        tableName: 'prestador'
    });

    Prestador.associate = (listaModels) => {
      Prestador.hasMany(listaModels.Prestador_endereco, {
        foreignKey: 'fk_prestador',
        as: 'prestadores_enderecos'
      }),
      Prestador.hasMany(listaModels.Habilidades, {
        foreignKey: 'fk_prestador'
      }),
      Prestador.hasMany(listaModels.Avaliacoes, {
        foreignKey: 'prestadores_idprestadores',
      }),
      Prestador.hasMany(listaModels.Contatos_prestador, {
        foreignKey: 'fk_prestador',
        as:'contatos_prestadores'
      })
    }
   
    return Prestador;
};