module.exports = (sequelize, DataTypes) => {
    const Prestador = sequelize.define("Prestador", {
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
        cpf:DataTypes.INTEGER,
        avatar:DataTypes.STRING(190),
        extensao_avatar:DataTypes.CHAR(5),
        data_cadastro:DataTypes.DATE
         
    }, {
        timestamps:false,
        tableName: 'prestador'
    });
    Prestador.associiate = (listaDeModelos ) => {
      Prestador.hasMany(listaDeModelos.Contatos_prestador, {
        foreignKey: 'fk_contatos_prestador',
        as: 'contatos_prestador'
      })
    },
    Prestador.associiate = (listaDeModelos ) => {
      Prestador.hasMany(listaDeModelos.Prestador_endereco, {
        foreignKey: 'fk_prestador_endereco',
        as: 'prestador_endereco'
      })
    }
    Prestador.associiate = (listaDeModelos ) => {
      Prestador.hasMany(listaDeModelos.Habilidades, {
        foreignKey: 'fk_habilidades',
        as: 'habilidades'
      })
    }
    return Prestador;
};