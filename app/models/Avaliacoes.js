module.exports = (sequelize, DataTypes) => {
  const Avaliacoes = sequelize.define("Avaliacoes", {
      id:{
          primaryKey:true,
          autoIncrement:true,
          type:DataTypes.INTEGER 
        },
      nota:{
          type:DataTypes.INTEGER ,
          allowNull:false
        },
      comentario:{
         type:DataTypes.STRING(190),
         allowNull:false
        },
      status_avaliacao:{
          type:DataTypes.STRING,
          allowNull:false
        },
      fk_prestador: DataTypes.INTEGER,
      fk_cliente: DataTypes.INTEGER,
      data_cadastro:DataTypes.DATE
       
  }, {
      timestamps:false,
      tableName: 'avaliacoes'
  });

  Avaliacoes.associate = (listaModels) => {
    Avaliacoes.belongsTo(listaModels.Prestador, {
      foreignKey: 'fk_prestador',
      as: 'prestador'
    }),
    Avaliacoes.belongsTo(listaModels.Cliente, {
      foreignKey: 'fk_cliente',
      as: 'cliente'
    })
  };
 
  return Avaliacoes;
};