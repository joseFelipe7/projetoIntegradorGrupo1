module.exports = (sequelize, DataTypes) => {
    const Habilidades = sequelize.define("Habilidades", {

  titulo:{
   type:DataTypes.STRING(190),
   allowNull:false
  },
  inicio_profissao:{
    type:DataTypes.DATE,
    allowNull:false
  },
  descricao:{
    type:DataTypes.STRING(290),
    allowNull:false
  },
  fk_prestador: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
timestamps:false,
tableName: 'habilidades'
});

Habilidades.associate = (listaModels) => {
  Habilidades.belongsTo(listaModels.Prestador, {
    foreignKey: 'fk_prestador',
    as: 'prestador'
  })
}

return Habilidades;
};