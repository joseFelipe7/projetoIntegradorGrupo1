module.exports = (sequelize, DataTypes) => {
  const Habilidades = sequelize.define("Habilidades", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo:{
   type:DataTypes.STRING(190),
   allowNull:true
  },
  inicio_profissao:{
    type:DataTypes.DATE,
    allowNull:true
  },
  descricao:{
    type:DataTypes.STRING(290),
    allowNull:true
  },
  fk_prestador: DataTypes.INTEGER
}, {
timestamps:false,
tableName: 'habilidades'
});

Habilidades.associate = (listaModels) => {
  Habilidades.belongsTo(listaModels.Prestador, {
    foreignKey: 'fk_prestador'
  })
}

return Habilidades;
};