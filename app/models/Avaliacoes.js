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
      prestadores_idprestadores: DataTypes.INTEGER,
      clientes_id: DataTypes.INTEGER,
      data_cadastro:DataTypes.DATE
       
  }, {
      timestamps:false,
      tableName: 'avaliacoes'
  });

  Avaliacoes.associate = (listaModels) => {
    Avaliacoes.belongsTo(listaModels.Prestador, {
      foreignKey: 'prestadores_idprestadores',
      as: 'prestadores'
    })
  };
 
  return Avaliacoes;
};