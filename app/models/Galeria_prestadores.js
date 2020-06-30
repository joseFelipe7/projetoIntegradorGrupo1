module.exports = (sequelize, DataTypes) => {
  const Galeria_prestadores = sequelize.define("Galeria_prestadores", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      foto:{
        type:DataTypes.STRING(190)
      },
      extensao:{
        type:DataTypes.STRING(5)
      },
      titulo:{
        type:DataTypes.STRING(45),
        allowNull:false
      },
      descricao:{
        type:DataTypes.STRING(345)
      },
      data_cadastro:DataTypes.DATE,
      fk_prestador:DataTypes.INTEGER
  }, {
      timestamps:false,
      tableName: 'galeria_prestadores'
  });

  Galeria_prestadores.associate = (listaModels) => {
    Galeria_prestadores.belongsTo(listaModels.Prestador, {
      foreignKey: 'fk_prestador',
    })
  }
 
  return Galeria_prestadores;
};