//cliente_endereco pertence a um cliente

module.exports = (sequelize, DataTypes) => {
    const Clientes_endereco = sequelize.define("Clientes_endereco", {

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
  bairro:{
    type:DataTypes.STRING(90)
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
  fk_cliente: {
    type: DataTypes.INTEGER
  }

}, {
  timestamps:false,
  tableName: 'clientes_endereco'
});

Clientes_endereco.associate = (listaModels) => {
  Clientes_endereco.belongsTo(listaModels.Cliente, {
    foreignKey: 'fk_cliente',
    as: 'cliente'
  })
}


return Clientes_endereco;
};