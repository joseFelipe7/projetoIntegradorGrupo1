module.exports = (sequelize, DataTypes) => {
    const Habilidades = sequelize.define("Habilidades", {

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
  }
}, {
timestamps:false,
tableName: 'habilidades'
});

Habilidades.associate = (listaModels) => {
  Habilidades.belongsToMany(listaModels.Prestador, {
    foreignKey: 'fk_habilidades',
    through: 'prestador_habilidades',
    as: 'prestador'
  })
}

return Habilidades;
};