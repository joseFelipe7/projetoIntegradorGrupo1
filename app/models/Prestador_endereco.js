//Prestador_endereco pertence a um prestador

module.exports = (sequelize, DataTypes) => {
    const Prestador_endereco = sequelize.define("Prestador_endereco", {
id:{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER 
  },
  logradouro:{
   type:DataTypes.STRING(190),
   allowNull:false
  },
  uf:{
    type:DataTypes.CHAR(2),
    allowNull:false
  },
  cidade:{
    type:DataTypes.STRING(90),
    allowNull:false
  },
  cep:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  numero:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  complemento:{
    type:DataTypes.STRING(90)
  },
  tipo_endereco:{
    type:DataTypes.CHAR(1)
  },
  fk_prestador: {
    type: DataTypes.INTEGER,
    allowNull: false
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