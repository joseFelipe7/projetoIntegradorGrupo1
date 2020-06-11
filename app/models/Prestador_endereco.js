//Prestador_endereco pertence a um prestador

module.exports = (sequelize, DataTypes) => {
    const Prestador_endereco = sequelize.define("Prestador_endereco", {

  logradouro:{
   type:DataTypes.STRING(190),
   allowNull:true
  },
  uf:{
    type:DataTypes.CHAR(2),
    allowNull:true
  },
  cidade:{
    type:DataTypes.STRING(90),
    allowNull:true
  },
  cep:{
    type:DataTypes.INTEGER,
    allowNull:true
  },
  numero:{
    type:DataTypes.INTEGER,
    allowNull:true
  },
  complemento:{
    type:DataTypes.STRING(90)
  },
  tipo_endereco:{
    type:DataTypes.CHAR(1)
  },
  fk_prestador: {
    type: DataTypes.INTEGER,
    
  }

}, {
timestamps:false,
tableName: 'prestador_endereco'
});

Prestador_endereco.associate = (listaModels) => {
  Prestador_endereco.belongsTo(listaModels.Prestador, {
    foreignKey: 'fk_prestador',
    as: 'prestador'
  })
}

return Prestador_endereco;
};